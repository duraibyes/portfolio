const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src/component/Home.tsx');
let data = fs.readFileSync(filePath, 'utf8');

// fix required="" to required
data = data.replace(/required=""/g, 'required');

fs.writeFileSync(filePath, data, 'utf8');
console.log('fixed required');