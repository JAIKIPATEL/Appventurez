// const os = require("os");
// // get the architecture of cpu
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// const freeMemory = os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);


/*---------------Path------------------------------------*/

const path = require("path");
console.log("/home/user/Desktop/Appventurez/training/Node/Os_Path_module.js");
console.log(path.extname("/home/user/Desktop/Appventurez/training/Node/Os_Path_module.js"));
console.log(path.dirname("/home/user/Desktop/Appventurez/training/Node/Os_Path_module.js"));
console.log(path.basename("/home/user/Desktop/Appventurez/training/Node/Os_Path_module.js"));
const myPath = console.log(path.parse("/home/user/Desktop/Appventurez/training/Node/Os_Path_module.js"));