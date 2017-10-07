
const { EventEmitter } = require('events');
let counter = 0;

const em = new EventEmitter();

setInterval(() => em.emit('timed', counter++), 3000);

em.on('timed', data => console.log(`timed ${data}`));
