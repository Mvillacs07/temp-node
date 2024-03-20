//file system module
// Async method 
const {readFile, writeFile} = require('fs')   //same as fs.readFile destructuring

//reading files
console.log('start');
// async method you need to provide a callback (we run the callback when we are done/complete)
readFile('./content/first.txt','utf8', (err, result) => {
 if(err) {
    console.log(err);
    return;
 }
const first = result;
readFile('./content/second.txt', 'utf8', (err, result) => {
 if(err) {
     console.log(err);
     return;
}
 const second = result;
 writeFile('./content/result-async.txt', 
 `Here is the result: ${first}, ${second}`,
 (err, result) => {
    if(err) {
        console.log(err);
        return;
     }
    // console.log(result);
    console.log('done with this task');
 } )
})
})

console.log('starting next task');
