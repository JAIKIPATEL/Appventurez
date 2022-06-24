const fs = require("fs");
// creating a new file
fs.writeFileSync("read.txt","welcome to the world");
fs.writeFileSync("read.txt","this is test of fs ");
fs.appendFileSync("read.txt", "t to test for crud");
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);
// to  rename the file
fs.renameSync("read.txt","readwrite.txt");

