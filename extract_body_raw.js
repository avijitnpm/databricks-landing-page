const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '_reference/index.html');
const bodyPath = path.join(__dirname, 'body_raw.html');

const html = fs.readFileSync(htmlPath, 'utf8');

// Regex to capture body conent
// Try to match <body ...> ... </body>
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;
const match = bodyRegex.exec(html);

if (match) {
    fs.writeFileSync(bodyPath, match[1]);
    console.log(`Extracted body content to ${bodyPath}`);
    console.log('Size:', match[1].length);
} else {
    console.error('Could not find body tag');
}
