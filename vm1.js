
const vm = require('vm');

const sandbox = {
  process: 'this baby',
  require: 'that',
  console: console,
};

vm.runInNewContext('console.log(process);console.log(require);', sandbox);
