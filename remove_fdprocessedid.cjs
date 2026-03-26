const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src/component/Home.tsx');
let data = fs.readFileSync(filePath, 'utf8');

// remove fdprocessedid attributes
data = data.replace(/\s+fdprocessedid="[^"]*"/g, '');

fs.writeFileSync(filePath, data, 'utf8');
console.log('removed fdprocessedid attributes');