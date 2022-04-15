const os = require('os');

//info about current user

// const us = os.userInfo();
// console.log(us);

//method returns system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} second`); 

const currentOS = {
  name : os.type(),
  release : os.release(),
  totalmem : os.totalmem(),
  freemem : os.freemem()
};

console.log(currentOS);