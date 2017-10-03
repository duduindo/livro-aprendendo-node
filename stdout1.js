
process.stdin.on('readable', () => {
	const input = process.stdin.read();

	if (input !== null)	 {
		// ecoa na saída o texto de entrada
		process.stdout.write(`Texto: ${input}`);
	}
});
