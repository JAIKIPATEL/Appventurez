/*
Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly after delay milliseconds.
To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.
Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions more precisely.
Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.
The browser limits the minimal delay for five or more nested calls of setTimeout or for setInterval (after 5th call) to 4ms. That’s for historical reasons.
Please note that all scheduling methods do not guarantee the exact delay.

For example, the in-browser timer may slow down for a lot of reasons:

The CPU is overloaded.
The browser tab is in the background mode.
The laptop is on battery.
All that may increase the minimal timer resolution (the minimal delay) to 300ms or even 1000ms depending on the browser and OS-level performance settings.*/


//For instance, this code calls sayHi() after one second:

function sayHi() {
  console.log('Hello');
}

setTimeout(sayHi, 1000);
//With arguments:

function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
//If the first argument is a string, then JavaScript creates a function from it.

setTimeout("console.log('Hello')", 1000);
//But using strings is not recommended, use arrow functions instead of them, like this:

setTimeout(() => console.log('Hello'), 1000);


//Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

//Let’s compare two code fragments. The first one uses setInterval:

let i = 1;
setInterval(function() {
  func(i++);
}, 100);
//The second one uses nested setTimeout:

let i1 = 1;
setTimeout(function run() {
  func(i1++);
  setTimeout(run, 100);
}, 100);
//For setInterval the internal scheduler will run func(i1++) every 100ms:


//In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

//When will the scheduled function run?

//After the loop.
//Before the loop.
//In the beginning of the loop.
//What is console.log going to show?

let i2 = 0;

setTimeout(() => console.log(i2), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i2++;
}