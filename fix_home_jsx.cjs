const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src/component/Home.tsx');
let data = fs.readFileSync(filePath, 'utf8');

// remove empty style objects
// handle style={{  }} with whitespace
const styleEmptyRegex = /\s*style=\{\{\s*\}\}/g;
data = data.replace(styleEmptyRegex, '');

// fix img tags: <img ...> to <img ... /> if not self-closed
const imgRegex = /<img\b([^>]*?)>/g;
data = data.replace(imgRegex, (match, attrs) => {
  if (match.trim().endsWith('/>')) return match;
  return `<img${attrs} />`;
});

// fix input tags too if any
const inputRegex = /<input\b([^>]*?)>/g;
data = data.replace(inputRegex, (match, attrs) => {
  if (match.trim().endsWith('/>')) return match;
  return `<input${attrs} />`;
});

// fix svg attributes that are not JSX-friendly
const svgAttrs = [
  ['fill-opacity', 'fillOpacity'],
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['clip-rule', 'clipRule'],
  ['color-interpolation-filters', 'colorInterpolationFilters'],
  ['filterUnits', 'filterUnits'],
  ['viewBox', 'viewBox'],
  ['xmlns', 'xmlns']
];
for (const [from, to] of svgAttrs) {
  const regex = new RegExp(from, 'g');
  data = data.replace(regex, to);
}

// fix tabindex to tabIndex (React JSX)
data = data.replace(/\btabindex\b/g, 'tabIndex');

fs.writeFileSync(filePath, data, 'utf8');
console.log('fixed Home.tsx');
