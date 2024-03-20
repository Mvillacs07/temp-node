//npm --gobal, command
// npm --version 

// local dependency 
// npm i <packageName> 
//global dependency 
//npm install -g <packageName> 

// package.json manifest file 
// manual approach in the root 
// 2nd way 
//npm init
//npm init -y

const _ = require('lodash') //utility library.. installed as dependency

const items = [1,[2, [3, [4]]]]

const newItems = _.flattenDeep(items); 
console.log( newItems);
