'use strict';

const eventEmitter = require('events').EventEmitter;
const util = require('util');
const fs = require('fs');


function InputChecker(name, file) {
	const config = {
		flags: 'a',
		encoding: 'utf8',
		mode: 0o666,
	};

	this.name = name;
	this.writeStream = fs.createWriteStream(`./${file}.txt`, config);
}


util.inherits(InputChecker, eventEmitter);


InputChecker.prototype.check = (input) => {
	// Remove excess of space white
	const command = input.trim().substr(0, 3);

  console.log(this);

	switch (command) {
		// Write data
		case 'wr:':
			this.emit('write', input.substr(3, input.length));
			break;

		// Close a process
		case 'en:':
			this.emit('end');
			break;

		//ecoa a entrada na saída-padrão caso não haja comandos
		default:
			this.emit('echo', input);
	}
};

// testa o novo objecto e o tratamento dos eventos
const ic = new InputChecker('Shelly', 'output');

ic.on('write', data => this.writeStream.write(data, 'utf8'));

ic.on('echo', data => process.stdout.write(`${ic.name} wrote ${data}`));

ic.on('echo', () => process.exit());



process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
	const input = process.stdin.read();

	if (input !== null)
		ic.check(input);
});
