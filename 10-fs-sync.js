//file system module
//2 methods  ASynchronously/ non blocking and synchronously
const {readFileSync, writeFileSync} = require('fs')   //same as fs.readFileSync destructuring
console.log('start');

//reading files
const first = readFileSync('./content/first.txt', 'utf-8' /**encoding */ )
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);

// creating files
writeFileSync('./content/result-sync.txt',
 `Here is the result: ${first}, ${second}`
)                       // 1st arg file name and if the file is not there, node will create it if already there it will overwrite 2nd arg is the value we want to pass

console.log('done with this task');
console.log('starting with the next one');


//  //append to the file
//  writeFileSync('./content/result-sync.txt',
//  `Here is the result: ${first}, ${second}`,
//   { flag: 'a' } /**flag object a would append it */
//  )  