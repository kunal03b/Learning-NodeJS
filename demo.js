const fs = require('fs');

// // blocking synchronous way
// const textIn = fs.readFileSync('F:/Learning NodeJS/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `What are you doing?\n ${textIn}`;
// fs.writeFileSync('F:/Learning NodeJS/output.txt', textOut);
// console.log('File Written :)');


// Non blocking asynchronous way
fs.readFile('F:/Learning NodeJS/input.txt', 'utf-8', (err, data1) => {
    console.log(data1);
    fs.readFile(`F:/Learning NodeJS/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);

        fs.writeFile('F:/Learning NodeJS/final.txt', `${data2}\n${data1}`, 'utf-8', err => {
            console.log('File has been written successfully');
        });
        console.log(data2);
    })
});
console.log('Just checking what will happen...');