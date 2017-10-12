
const vm = require('vm');

global.one = 1;
const two = 2;

const txt = `console.log(typeof one++, typeof two)`;

const script = new vm.Script(txt);
script.runInThisContext({filename: 'count.vm'});

console.log(one);
