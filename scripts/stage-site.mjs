import { readdir, readFile, mkdir, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
const pages = [];
const excluded = new Set(['.git', '.openai', 'dist', 'docs', 'scripts', 'node_modules']);
async function scan(dir) {
  for (const entry of await readdir(dir, {withFileTypes: true})) {
    if (excluded.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await scan(full);
    else if (entry.name.endsWith('.html')) pages.push(full);
  }
}
await scan(root);
const files = new Set(pages);
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  for (const match of html.matchAll(/(?:href|src|poster)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref)) continue;
    const pathname = decodeURIComponent(ref.split(/[?#]/)[0]);
    if (!pathname || pathname.endsWith('/')) continue;
    const file = pathname.startsWith('/') ? path.join(root, pathname) : path.resolve(path.dirname(page), pathname);
    if (!file.startsWith(root + path.sep)) throw new Error('Asset outside project: ' + ref);
    files.add(file);
  }
}
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
for (const file of files) {
  const target = path.join(output, path.relative(root, file));
  await mkdir(path.dirname(target), {recursive: true});
  await copyFile(file, target);
}
console.log(`Staged ${pages.length} pages and ${files.size - pages.length} assets into dist/.`);
