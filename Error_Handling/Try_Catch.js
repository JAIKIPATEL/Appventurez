/*The difference becomes obvious when we look at the code inside a function.

The behavior is different if there’s a “jump out” of try...catch.

For instance, when there’s a return inside try...catch. The finally clause works in case of any exit from try...catch, even via the return statement: right after try...catch is done, but before the calling code gets the control.
*/
// function f() {
//   try {
//     console.log('start');
//     return "result";
//   } catch (err) {
//     /// ...
//   } finally {
//     console.log('cleanup!');
//   }
// }

// f(); // cleanup!
// //…Or when there’s a throw, like here:



function f() {
  try {
    console.log('start');
    throw new Error("an error");
  } catch (err) {

    if("can't handle the error") {
      throw err;
    }

  } finally {
    console.log('cleanup!')
  }
}

f(); // cleanup!