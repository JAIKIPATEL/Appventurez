
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.


const sumValues = (salries) => {
    let sum = 0;
    for (let salary of Object.values(salries)) {
        sum += salary
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}
console.log(sumValues(salaries)) //650

console.log("---------------")



// Count properties
// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

// alert( count(user) ); // 2
const count = (user)=>{
    return Object.keys(user).length
}
console.log(count(user))