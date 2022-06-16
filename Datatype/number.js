// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123
//multiply by numbers
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

//Hexadecimal code
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

//Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

//represent num with the given base
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

// base 36
alert( 123456..toString(36) ); // 2n9c
// two dots to call amethod
(123456).toString(36)

/*rounding
Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.


let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits*/
// round the result
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

/*Sometimes isFinite is used to validate whether a string value is a regular number:

let num = +prompt("Enter a number", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num) );

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

RANDOM NUMBER
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
*/