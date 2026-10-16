'use strict';
const fs = require('node:fs');
const path = require('node:path');
const {parse} = require('./dist/qa-engine.js');
const sourcePath = path.resolve(__dirname, '../img/qa.txt');
function loadQA() { return parse(fs.readFileSync(sourcePath, 'utf8'), 'qa.txt'); }
function buildQA() {
  const entries = loadQA();
  fs.writeFileSync(path.join(__dirname, 'dist/qa-data.json'), JSON.stringify({version: 1, entries}, null, 2) + '\n');
  return entries;
}
module.exports = {loadQA, buildQA};
if (require.main === module) console.log('Indexed ' + buildQA().length + ' QA entries.');
