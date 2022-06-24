const fs = require("fs");
// creating a new file
fs.writeFileSync("read.txt","welcome to the world");
fs.writeFileSync("read.txt","this is test of fs ");
fs.appendFileSync("read.txt", "t to test for crud");

