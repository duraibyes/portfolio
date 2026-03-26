const fs = require('fs');
const p = 'src/component/Home.tsx';
let t = fs.readFileSync(p, 'utf8');
const camel = (s) => s.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
t = t.replace(/style="([^"]*?)"/gs, (m, content) => {
  const styles = content.split(';').map((s) => s.trim()).filter(Boolean);
  if (styles.length === 0) return 'style={{}}';
  const parts = [];
  for (const s of styles) {
    const idx = s.indexOf(':');
    if (idx === -1) continue;
    const key = camel(s.slice(0, idx));
    const value = s.slice(idx + 1).trim();
    const safeVal = JSON.stringify(value);
    parts.push(`${key}: ${safeVal}`);
  }
  return `style={{ ${parts.join(', ')} }}`;
});
fs.writeFileSync(p, t);
const styleAttrs = (t.match(/style="[^"]*"/g) || []).length;
const reactStyles = (t.match(/style=\{\{/g) || []).length;
console.log('done', styleAttrs, reactStyles);
