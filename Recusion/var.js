function sayHi() {
    phrase = "Hello";
  
    console.log(phrase);
  
    var phrase;
  }
  sayHi();
//  …Is technically the same as this (moved var phrase above):
  
  function sayHi() {
    var phrase;
  
    phrase = "Hello";
  
    console.log(phrase);
  }
  sayHi();
  //…Or even as this (remember, code blocks are ignored):
  
  function sayHi() {
    phrase = "Hello"; // (*)
  
    if (false) {
      var phrase;
    }
  
    console.log(phrase);
  }
  sayHi();

  function sayHi() {
    alert(phrase);
  
    var phrase = "Hello";
  }
  
  sayHi();
  //The line var phrase = "Hello" has two actions in it:
  
  //Variable declaration var
  //Variable assignment =.
  