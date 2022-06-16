// Destructuring assignment
// importance: 5
// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)


let user =  {name:"Shubham", years:24};

let {name ,years:age, isAdmin=false} = user;
console.log(name); // shubham
console.log(age); // 24
console.log(isAdmin) // false


console.log("------------");

// The maximal salary
// importance: 5
// There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


