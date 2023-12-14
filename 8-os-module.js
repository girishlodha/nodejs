const os = require('os')
//infon about current user

const user = os.userInfo()
console.log(user)


//method retuens the system uptume  in seconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name:os.type(),
    release: os.release(),
    freeMem: os.freemem(),
}

console.log(currentOS)