const input = require('sync-input')

let g = input("Input ö: ")

let h = g.normalize();

console.log(h.length);

let j = [...g]

console.log(j)