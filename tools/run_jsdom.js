import fs from 'fs';
import path from 'path';
import { JSDOM, VirtualConsole } from 'jsdom';

const htmlPath = path.resolve(process.cwd(), 'dist', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found — please build first');
  process.exit(2);
}

const html = fs.readFileSync(htmlPath, 'utf8');

const virtualConsole = new VirtualConsole();
virtualConsole.on('log', (msg) => console.log('[page]', msg));
virtualConsole.on('error', (msg) => console.error('[page][error]', msg));
virtualConsole.on('warn', (msg) => console.warn('[page][warn]', msg));

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  resources: 'usable',
  virtualConsole
});

dom.window.addEventListener('error', (e) => {
  console.error('Window error:', e.error || e.message || e);
});

dom.window.addEventListener('unhandledrejection', (ev) => {
  console.error('Unhandled rejection:', ev.reason);
});

setTimeout(() => {
  console.log('DOM ready. Document title:', dom.window.document.title);
  const root = dom.window.document.getElementById('root');
  if (root) {
    console.log('Root innerHTML length:', root.innerHTML.length);
    if (root.innerHTML.length === 0) console.error('Root is empty — runtime error likely.');
  } else {
    console.error('No #root element found.');
  }
  process.exit(0);
}, 3000);
