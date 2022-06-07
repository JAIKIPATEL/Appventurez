/*arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

let arr = ["JAIKI", "SHUBHAM", "AKHAND"];

delete arr[1]; // remove "SHUBHAM"

console.log( arr[1] ); // undefined

// now arr = ["JAIKI",  , "AKHAND"];
console.log( arr.length ); // 3   */

//splice
let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

console.log(arr1); // ["I", "JavaScript"]

let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr3.splice(0, 3, "Let's", "dance");

console.log( arr3 ) // now ["Let's", "dance", "right", "now"]

//Here we can see that splice returns the array of removed elements:

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements
//The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr2 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr2 ); // "I", "study", "complex", "language", "JavaScript"

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

console.log( arr4 ); // "I", "study", "complex", "language", "JavaScript"

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

console.log( arr5 ); // 1,2,3,4,5

let arr6 = [1, 2];

// create an array from: arr and [3,4]
console.log( arr6.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr6.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr6.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
  });