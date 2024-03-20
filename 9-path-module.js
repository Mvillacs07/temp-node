const { log } = require('console')
const path = require('path')

log(path.sep) //terurns platform specific seperator
const filePath = path.join('/content', 'subfolder', 'test.txt')   // joins a sequence of paths using the separator (see the whole path)
log(filePath)    

//basename
const base = path.basename(filePath)
log(base)

//.resolve return an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //points to the directory where appjs is located
log(absolute);