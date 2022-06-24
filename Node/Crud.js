/*--------------------------------------------------
1- Create a folder 
2- creat a file in it named bio.txt and data into it.
3- Add more data into the file at the end  of the existing data.
4-Read th data without  getting the buffer data at first.
5- Rename the file to mybio.txt
6- Now delete the file and the folder
---------------------------------------------------------------------*/
const fs = require("fs");
// make a folder 
//fs.mkdirSync("mybio");
//write a file and data
//fs.writeFileSync("bio.txt","my bio first line");


//fs.readFileSync("bio.txt","hello this is my bio." );
//fs.appendFileSync("bio.txt","this is append part of my bio");
const data = fs.readFileSync("bio.txt","utf-8");
console.log(data);

