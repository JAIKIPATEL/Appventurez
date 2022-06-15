
// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

for(let veg of recipeMap.keys()){
   console.log(veg)
}
console.log("---------")
for(let veg of recipeMap.values()){
    console.log(veg)
 }
 console.log("---------")
 for(let veg of recipeMap){
    console.log(veg)

 }
 console.log("-------------");

//  Besides that, Map has a built-in forEach method, similar to Array:

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

console.log("------------")


// Object.entries: Map from Object
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

// array of [key, value] pairs
let map1 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log( map1.get('1') ); // str1
// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

// So we can create a map from an object like this:

let obj = {
  name: "John",
  age: 30
};

let map2 = new Map(Object.entries(obj));

console.log( map2.get('name') ); // John
// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.


console.log("--------------");

// Filter unique array members
// importance: 5
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

const unique = (arr)=> {
  /* your code */
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// alert( unique(values) ); // Hare, Krishna, :-O
console.log(unique(values))


console.log("--------------");

// terable keys
// importance: 5
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

// But that doesn’t work:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
// Why? How can we fix the code to make keys.push work?


let map = new Map();
map.set("name","John");
let keys =  Array.from(map.keys());
keys.push("shubham");
console.log(keys)

// That’s because map.keys() returns an iterable, but not an array.

// We can convert it into an array using Array.from: