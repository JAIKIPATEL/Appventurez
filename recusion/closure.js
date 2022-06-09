{
    // do some job with local variables that should not be seen outside
  
    let message = "Hello"; // only visible in this block
  
    console.log(message); // Hello
  }
  
 //console.log(message); // Error: message is not defined1

 // nested function
 function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }


// Returning a function
//Let’s return to the makeCounter example.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();


function f() {
    let value = 123;
  
    return function() {
      alert(value);
    }
  }
  
  let g1 = f(); // while g function exists, the value stays in memory
  
  g1 = null; // ...and now the memory is cleaned up
  
  //Try running the example below in Chrome with the Developer Tools open.

//When it pauses, in the console type alert(value).

function f() {
  let value = Math.random();

  function g() {
    debugger; // in console: type alert(value); No such variable!
  }

  return g;
}

let g = f();
g();


let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g3() {
    debugger; // in console: type alert(value); Surprise!
  }

  return g3;
}

let g3 = f();
g3();
