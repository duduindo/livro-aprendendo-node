
const fs = require('fs'); // FileSystem

// readFile is type 'errBack'
fs.readFile('./apples.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const adjData = data.replace(/apple/g, 'orange');

    fs.writeFile('./oranges.txt', adjData, err => (err) ? console.error(err) : true);
  }
});
