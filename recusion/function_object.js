/*Functions are objects.

Here we covered their properties:

name – the function name. Usually taken from the function definition, but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).
length – the number of arguments in the function definition. Rest parameters are not counted.
If the function is declared as a Function Expression (not in the main code flow), and it carries the name, then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.

function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => alert('You said yes'), result => alert(result));
*/

  // set and decrease for counter
  function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
    

  }
  console.log(makeCounter())