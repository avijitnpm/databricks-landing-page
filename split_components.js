const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'body_raw.html');
const raw = fs.readFileSync(filePath, 'utf8');

// We need to be careful about line endings. 
// The grep command counted lines based on \n.
const lines = raw.split(/\r?\n/);

const navbarRange = [316, 2007];
// Page: 2009 - 9923
const pageRange = [2009, 9923];
// Footer: 9924 - 11303
const footerRange = [9924, 11303];

function getChunk(startLine, endLine) {
    // 0-indexed slicing
    // startLine is 1-based index of first line
    // endLine is 1-based index of last line
    return lines.slice(startLine - 1, endLine).join('\n');
}

const navbarHtml = getChunk(navbarRange[0], navbarRange[1]);
const footerHtml = getChunk(footerRange[0], footerRange[1]);
const pageHtml = getChunk(pageRange[0], pageRange[1]);

fs.writeFileSync('navbar_raw.html', navbarHtml);
fs.writeFileSync('footer_raw.html', footerHtml);
fs.writeFileSync('page_raw.html', pageHtml);

console.log('Files created: navbar_raw.html, footer_raw.html, page_raw.html');
console.log('Navbar lines:', navbarHtml.split('\n').length);
console.log('Footer lines:', footerHtml.split('\n').length);
console.log('Page lines:', pageHtml.split('\n').length);
