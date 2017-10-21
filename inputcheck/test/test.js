
const { InputChecker } = require('../index');


// // testa o novo objecto e o tratamento dos eventos
const ic = new InputChecker('Shelly', './public/output');

ic.on('write', function(data) {
  this.writeStream.write(data, 'utf8');
});

ic.on('echo', data => process.stdout.write(`${ic.name} wrote ${data}`));

ic.on('end', () => process.exit());

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null)
    ic.check(input);
});
