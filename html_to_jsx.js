const fs = require('fs');

function toCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function parseStyle(styleStr) {
    // Basic style parser: "color:red; font-size: 10px" -> {color:'red', fontSize:'10px'}
    const props = styleStr.split(';').filter(s => s.trim());
    const obj = [];
    props.forEach(prop => {
        const parts = prop.split(':');
        // Handle cases where value contains colon (e.g. url(http://...))
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const val = parts.slice(1).join(':').trim();
            const camelKey = toCamelCase(key);
            // Escape single quotes for the JS string
            const valStr = val.replace(/'/g, "\\'");
            obj.push(`${camelKey}: '${valStr}'`);
        }
    });
    return `{{${obj.join(', ')}}}`;
}

function convert(html) {
    let code = html;

    // Class
    code = code.replace(/\bclass="/g, 'className="');
    // For
    code = code.replace(/\bfor="/g, 'htmlFor="');
    // TabIndex
    code = code.replace(/\btabindex="(-?[0-9]+)"/g, 'tabIndex={$1}');
    // Aria-level
    code = code.replace(/\baria-level="([0-9]+)"/g, 'aria-level={$1}');

    // Boolean attributes: attr="" -> attr
    const boolAttrs = ['inert', 'disabled', 'readonly', 'required', 'checked', 'selected', 'multiple', 'muted', 'controls', 'loop', 'autoplay', 'playsinline', 'hidden', 'defer', 'async', 'novalidate', 'formnovalidate', 'autofocus', 'reversed', 'itemscope', 'allowfullscreen'];
    boolAttrs.forEach(attr => {
        // Handle attr="" and attr="attr" and simple attr presence is already fine? 
        // HTML string usually has attr="" for boolean if parsed from DOM, or just attr.
        // My script takes raw HTML.
        const re = new RegExp(`\\b${attr}=""`, 'gi');
        code = code.replace(re, attr);
    });
    // Fallback for dynamic? No, static HTML usually has numbers.

    // SVG and common attributes mapping
    const attrMap = {
        'stroke-width': 'strokeWidth',
        'stroke-linecap': 'strokeLinecap',
        'stroke-linejoin': 'strokeLinejoin',
        'fill-rule': 'fillRule',
        'clip-rule': 'clipRule',
        'stroke-miterlimit': 'strokeMiterlimit',
        'colspan': 'colSpan',
        'rowspan': 'rowSpan',
        'stop-color': 'stopColor',
        'stop-opacity': 'stopOpacity',
        'fill-opacity': 'fillOpacity',
        'stroke-opacity': 'strokeOpacity',
        'text-anchor': 'textAnchor',
        'alignment-baseline': 'alignmentBaseline',
        'dominant-baseline': 'dominantBaseline',
        'viewbox': 'viewBox', // HTML often has viewBox but check case
        'srcset': 'srcSet',
        'datetime': 'dateTime',
        'usemap': 'useMap',
        'crossorigin': 'crossOrigin',
        'autocomplete': 'autoComplete',
        'autofocus': 'autoFocus',
        'enctype': 'encType',
        'xmlns:xlink': 'xmlnsXlink',
        'xmlns:href': 'xmlnsHref',
        'xlink:href': 'xlinkHref',
        'variant': 'data-variant',
        'label': 'data-label',
        'to': 'data-to'
    };

    Object.keys(attrMap).forEach(key => {
        const re = new RegExp(`\\b${key}=`, 'g');
        code = code.replace(re, `${attrMap[key]}=`);
    });

    // Scripts with content -> dangerouslySetInnerHTML
    code = code.replace(/<script([^>]*)>([\s\S]*?)<\/script>/gi, (match, attrs, content) => {
        if (!content || !content.trim()) return match;
        const escaped = content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
        return `<script${attrs} dangerouslySetInnerHTML={{ __html: \`${escaped}\` }} />`;
    });

    // Style - capture content inside style="..."
    // Note: this simple regex fails on nested quotes, but style attrs usually use single quotes or no quotes inside.
    code = code.replace(/\bstyle="([^"]*)"/g, (match, p1) => {
        return `style=${parseStyle(p1)}`;
    });

    // Self-closing tags conversion
    // img, input, br, hr, meta, link, source, track, area, col, param, wbr
    const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'track', 'area', 'col', 'param', 'wbr'];
    voidTags.forEach(tag => {
        // Tag start: <tag
        // Attributes: [^>]*
        // End: > (but not />)
        // We use a regex to find: <tag \s+ attrs... >
        // And replace with <tag ... />
        // Note: [^>] matches / so we need to be careful not to match existing self-close.
        // Lookbehind (?<!/) checks the character before > is not /.

        try {
            const re = new RegExp(`<${tag}(\\s[^>]*?)?(?<!/)>`, 'gi');
            code = code.replace(re, (match, p1) => {
                return `<${tag}${p1 || ''} />`;
            });
        } catch (e) {
            // fallback if lookbehind not supported (older node)
            const re = new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi');
            code = code.replace(re, (match, p1) => {
                if (match.endsWith('/>')) return match;
                return `<${tag}${p1 || ''} />`;
            });
        }
    });

    // Comments
    code = code.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Remove Doctype or html/body tags if present (helper for full files)
    // But we are processing fragments.

    return code;
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error("Usage: node html_to_jsx.js <input> <output>");
    process.exit(1);
}

const html = fs.readFileSync(inputFile, 'utf8');
const jsx = convert(html);

const componentName = process.argv[4];
let output = jsx;

if (componentName) {
    output = `'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ${componentName}() {
  return (
    <>
${jsx}
    </>
  );
}
`;
}

fs.writeFileSync(outputFile, output);
console.log(`Converted ${inputFile} to ${outputFile} as ${componentName}`);
