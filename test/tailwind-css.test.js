const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.join(__dirname, '..');
const cli = path.join(root, 'node_modules', '.bin', 'tailwindcss');

// static/app.css is committed so `go run .` works without Node. Rebuilding it
// must not change it, otherwise a class used in a template has no CSS.
test('static/app.css matches the templates', { skip: !fs.existsSync(cli) && 'run npm install first' }, () => {
    const output = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'koffan-css-')), 'app.css');
    execFileSync(cli, ['-c', 'tailwind.config.js', '-i', 'tailwind/input.css', '-o', output, '--minify'], { cwd: root, stdio: 'ignore' });
    assert.ok(fs.readFileSync(output, 'utf8') === fs.readFileSync(path.join(root, 'static', 'app.css'), 'utf8'),
        'static/app.css is out of date; run `npm run build:css`');
});
