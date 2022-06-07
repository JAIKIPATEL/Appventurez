/*Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
//Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines
*/

let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(); // a multiline list of guests
//For example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 == str2); // true
let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.charAt(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o

//Methods toLowerCase() and toUpperCase() change the case:

console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface
