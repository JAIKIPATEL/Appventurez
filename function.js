//local variable
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

  // outer variable can not access
  let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

//copy a function to another variable
function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  
  