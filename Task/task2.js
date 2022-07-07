//Hello
//console.log("hello")

/*sum of two numbers
const num1 =2;
const num2 = 3;
 sum= num1+num2;
 console.log(sum);

//square root of  number
const num =100;
const result = Math.sqrt(num);
console.log(result);

//Area of triangle
const height =10;
const base = 10;
const Area =(base*height)/2;
console.log(Area);

//swap two numbers
let a = 3
let b = 4
let temp;
temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//6-Quaradtic equation
let a=10;
let b=10;
let c=20;
let d = b*b-4*a*c;

if (d > 0) {
    root1 = (-b + Math.sqrt(d)) / (2 * a);
    root2 = (-b - Math.sqrt(d)) / (2 * a);

  
    console.log(`The roots are ${root1} and ${root2}`);
}


else if (d == 0) {
    root1 = root2 = -b / (2 * a);


    console.log(`The roots are ${root1} and ${root2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
}

// km to miles
const kilometers = 100
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);

//Celsius to Fahrenheit
const celsius = 40
const fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// Odd and Even
const number = 10;
const result = (number % 2  == 0) ? "even" : "odd";
console.log(`The number is ${result}.`);

//Largest Number Among Three Numbers
const num1 = 2;
const num2 = 3;
const num3 = 4;
let maximum;
if(num1 >= num2 && num1 >= num3){
    maximum = num1;
}
else if (num2 >= num1 && num2 >= num3){
    maximum = num2;
}
else {
    maximum =num3;
}
console.log( maximum);

// check prime number and print
const num = 5;
let prime =true;
if(num===1) {
    console.log("1 is not prime nor composite");
}
else if (num >1) {
    for(let i =2;i<num;i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
}
if(prime){
    console.log(`${num} prime`);
} else {
    console.log(`${num}  not prime`);
}

*/

// fibonacci 
const number = 10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
//










           
