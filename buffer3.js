'use strict';

// 1
const a = [1, 2, 3];
const b = Buffer.from(a);

console.log(b);

// 2
const a2 = new Uint8Array([1,2,3]);
const b2 = Buffer.from(a2);

console.log(b2);

// 3
const b3 = Buffer.alloc(10);
console.log(b3);

// 4
const b4 = Buffer.allocUnsafe(10);
console.log(b4);