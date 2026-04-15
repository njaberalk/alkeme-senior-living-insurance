const fs = require('fs');
const path = require('path');
const BASE = __dirname;

function w(relPath, content) {
  const fp = path.join(BASE, relPath);
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, 'utf8');
  console.log('wrote ' + relPath + ' (' + content.length + ' bytes)');
}

console.log('Starting full site build...');
console.log('Base directory: ' + BASE);

// We will write all files in phases
// Phase 1 is defined in build-phase1.js, etc.
// This file orchestrates them all

require('./build-phase1.js');
require('./build-phase2.js');
require('./build-phase3.js');
require('./build-phase4.js');
require('./build-phase5.js');

console.log('\nFull site build complete!');
