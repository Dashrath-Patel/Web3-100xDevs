// What is a require function ?
// Require function is a built in function in Node.js that is used to import modules, JSON , and local files in to from another file/modile. 

const fs = require('fs');
const text = fs.readFileSync('./sample.txt', 'utf-8');
console.log(text);