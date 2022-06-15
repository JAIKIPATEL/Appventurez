//For instance, to gather all arguments into array args:

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6
//We can choose to get the first parameters as variables, and gather only the rest.

//Here the first two arguments go into variables and the rest go into titles array:

//We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8
//We can even combine the spread syntax with normal values:

let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr3, 2, ...arr4, 25) ); // 25
//Also, the spread syntax can be used to merge arrays:

let arr5 = [3, 5, 1];
let arr6 = [8, 9, 15];

let merged = [0, ...arr5, 2, ...arr6];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr5, then 2, then arr6)


//Copy an array/object
//Remember when we talked about Object.assign() in the past?

//It is possible to do the same thing with the spread syntax.

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3
//Note that it is possible to do the same thing to make a copy of an object:

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}