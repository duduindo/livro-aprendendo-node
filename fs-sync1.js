
const fs = require('fs');

try {
  const data = fs.readFileSync('./apples.txt', 'utf8');
  console.log(data);

  const adjData = data.replace(/[A|a]apple/g, 'orange');
  fs.writeFileSync('./oranges.txt', adjData);
} catch (err) {
  console.log(err);
}
