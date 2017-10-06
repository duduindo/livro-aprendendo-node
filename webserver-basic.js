
const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
	console.log('Request event');

	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello World\n');
});

server.on('connection', () => {
	console.log('Connection event');
});

server.listen(8124, () => {
	console.log('listening event');
});


console.log('Server running on port 8124');