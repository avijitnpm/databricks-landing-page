const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '_reference/index.html');
const cssPath = path.join(__dirname, 'src/app/globals.css');

const html = fs.readFileSync(htmlPath, 'utf8');

// Regex to capture style tags
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;

let css = '';
let match;
let count = 0;

while ((match = styleRegex.exec(html)) !== null) {
    css += match[1] + '\n';
    count++;
}

console.log(`Extracted ${count} style blocks.`);

// Add some basic resets if needed, or just strict extraction
const finalCss = `/* Extracted Styles */
${css}
`;

fs.writeFileSync(cssPath, finalCss);
console.log('Written to src/app/globals.css');
