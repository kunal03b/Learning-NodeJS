const fs = require('fs');

const textIn = fs.readFileSync('F:/Learning NodeJS/input.txt','utf-8');
console.log(textIn);

const textOut = `What are you doing?\n ${textIn}`;
fs.writeFileSync('F:/Learning NodeJS/output.txt', textOut);
console.log('File Written :)');