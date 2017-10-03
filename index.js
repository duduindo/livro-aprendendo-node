const http = require('http');
const fs = require('fs'); // File System
const url = require('url'); // URL

http.createServer((request, response) => {
    let name = url.parse(request.url, true).query.name;

    if (name === undefined) name = 'world';

    if (name === 'hahaha') {
        const file = 'hahaha.jpg';

        fs.stat(file, (error, stat) => {
            if (error) {
                console.error(error);
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Sorry, Hahaha isn\'t around riight now\n');
            } else {
                const img = fs.readFileSync(file);
                response.contentType = 'image/jpg';
                response.contentLength = stat.size;
                response.end(img, 'binary');
            }
        });
    } else {
        response.writeHead(200, {'Content-Type': 'textr/plain'});
        response.end(`Hello ${name}\n`);
    }
}).listen(8124);

console.log('Server running at port 8124\n');