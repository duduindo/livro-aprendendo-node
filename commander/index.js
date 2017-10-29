'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .option('-s, --source [web site]', 'Source web site')
  .option('-f, --file [file name]', 'File name')
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-d, --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
  .parse(process.argv);

console.log(program.source);
console.log(program.file);
