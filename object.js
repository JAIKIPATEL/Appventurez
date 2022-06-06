let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  // get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30


let obj = {};// CREATE AN EMPTY OBJECT USER
obj.name = "John";//property name  with values John
obj.surname = "Smith";// surname with values smith
obj.name = "Pete";//change the value to pete
delete obj.name;// remove the property name from the object
console.log(obj)

console.log("--------------");

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.
//let user = { name: "John" };

//let admin = user; // copy the reference


//Replace Function Expressions with arrow functions in the code below:

// Write the code to sum all salaries and store in the variable sum.
//  Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]    // 
}
console.log(sum) // 390
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);



function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),  // here arrow => represent return 
    () => alert("You canceled the execution.")
  );
//   Looks short and c
