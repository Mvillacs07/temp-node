//OS MODULE
const { log } = require('console')
const os = require('os') // no './' because it's built it

// current user info
const user = os.userInfo()
// console.log(user)

//computer uptime
// console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

log(currentOS);