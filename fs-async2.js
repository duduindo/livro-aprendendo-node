/**
 * @about Page 72
 */
'use strict';

// Library internal Node
const fs = require('fs');

const writeStream = fs.createWriteStream('./log.txt', {flags: 'a', encoding: 'utf8', mode: 0o666});

writeStream.on('open', () => {

  // Get list files - readdir is it errback
  fs.readdir('./data/', (err, files) => {

    // For each file
    if (err) {
      // Type error: ENOENT: no such file or directory, scandir './data/'
      console.error(err.message);
    } else {
      files.forEach((name) => {
        // Modify content
        fs.readFile(`./data/${name}`, 'utf8', (err, data) => {
          if (err) {
            // Type error with folder in ./data/: EISDIR: illegal operation on a directory, read
            console.error(err.message);
          } else {
            const adjData = data.replace(/somecompany\.com/g, 'burningbird.net');

            // write file
            fs.writeFile(`./data/${name}`, adjData, (err) => {
              if (err) {
                console.error(err.message);
              } else {
                // write log
                writeStream.write(`changed ${name} \n\n`, 'utf8', err => (err) ? console.error(err.message) : true);
              }
            });
          }
        });

      });
    }
  });
});

writeStream.on('error', err => (err) ? console.error(`ERROR: ${err}`) : true);


