/**
 * List of encoding support: https://stackoverflow.com/a/14551669/1816657
 * 													 https://github.com/nodejs/node/blob/master/lib/buffer.js
 */


process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
	const input = process.stdin.read();

	if (input !== null)	 {
		// ecoa na saída o texto de entrada
		process.stdout.write(`Texto: ${input}`);

		const command = input.trim();

		if (command === 'exit') {
			process.exit(0);
		}
	}
});
