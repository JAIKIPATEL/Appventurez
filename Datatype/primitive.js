//convert to upper case
let str = "Hello";

alert( str.toUpperCase() ); // HELLO

let num = Number("123"); // convert a string to number
//The special primitives null and undefined are exceptions.most primitives
alert(null.test); // error

//One of the best things about objects is that we can store a function as one of its properties.

let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

/* adding a string property
let str = "Hello";

str.test = 5; // (*)

alert(str.test);
Depending on whether you have use strict or not, the result may be:

undefined (no strict mode)
An error (strict mode).*/