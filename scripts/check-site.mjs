import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.resolve(project, process.argv[2] || '.');
const excluded = new Set(['.git', '.openai', 'archive', 'dist', 'docs', 'scripts', 'node_modules']);
const pages = [];
const styles = [];
const errors = [];
const targets = new Set();
const identifiers = new Map();

function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (entry.name.endsWith('.html')) pages.push(file);
    else if (entry.name.endsWith('.css')) styles.push(file);
  }
}

function check(source, reference) {
  if (!reference) return;
  const relative = path.relative(root, source).split(path.sep).join('/');
  let url;
  let target;
  try {
    url = new URL(reference.replaceAll('&amp;', '&'), `https://site.invalid/${relative}`);
    if (url.origin !== 'https://site.invalid') return;
    target = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (target !== root && !target.startsWith(root + path.sep)) throw new Error('outside site root');
  } catch (error) {
    errors.push(`${relative}: invalid local reference ${reference} (${error.message})`);
    return;
  }
  if (existsSync(target) && statSync(target).isDirectory()) target = path.join(target, 'index.html');
  if (!existsSync(target) || !statSync(target).isFile()) {
    errors.push(`${relative}: missing ${reference}`);
    return;
  }
  targets.add(target);
  if (url.hash && target.endsWith('.html')) {
    if (!identifiers.has(target)) {
      const html = readFileSync(target, 'utf8');
      identifiers.set(target, new Set([...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map(match => match[1])));
    }
    let fragment;
    try { fragment = decodeURIComponent(url.hash.slice(1)); }
    catch { errors.push(`${relative}: invalid fragment ${reference}`); return; }
    if (!identifiers.get(target).has(fragment)) errors.push(`${relative}: missing fragment ${reference}`);
  }
}

scan(root);
if (!pages.length) errors.push('No HTML pages found.');
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src|poster|action)\s*=\s*["']([^"']+)["']/g)) check(page, match[1]);
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (!/http-equiv\s*=\s*["']refresh["']/i.test(match[0])) continue;
    const content = match[0].match(/\bcontent\s*=\s*["']([^"']+)["']/i)?.[1];
    const target = content?.match(/(?:^|;)\s*url\s*=\s*(.+)$/i)?.[1];
    if (target) check(page, target.trim());
  }
}
for (const stylesheet of styles) {
  const css = readFileSync(stylesheet, 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) check(stylesheet, match[1]);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.length} pages and ${targets.size} local targets: all references resolve.`);
}
