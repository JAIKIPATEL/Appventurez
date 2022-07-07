// const { isObjectIdOrHexString } = require("mongoose");

// // var-functional scope and let and const are block scoped
//   const name ="jaik";
//   console.log(name);
//   console.log(`${name}`.startsWith('j'));
//   console.log(`${name}`.endsWith('k'));
//   console.log(`${name}`.includes('jai'));
//   console.log(`${name}   `.repeat('10'));
//   //Array destructuring  assignments syntax is a javascript
// //  expression that make it possible to unpack
//   //values from arrays,or properties from ,
//   //into distinct variables.arrays

//    const myproglang = ['js','php','c','python','java'];
// // es5
// // var top1 = myproglang[0];
// // var top1 = myproglang[1];
// // var top1 = myproglang[2];   
// // var top1 = myproglang[3];

// console.log("my fav pro lang is "+top1);

// //es6
// let [top1,top2,top3,top4,top5]= myproglang

// console.log("my fav pro lang is "+top1);

// //object destructuring in es6
// const bioData = {
//   name :"jaiki",
//   age : 28,
//   deg : 'b.tech'
// }
// let ({name,age,deg} = bioData);
// console.log(`my name is ${name} . My age is${age}`);


// //fat arrow function
// const sum = () => {
//   let a = 5;
//   let b = 10;
//   return a+b;
// }
// console.log(sum());


//rest parameters
// function sum(...inputs){
//   console.log(...inputs);
//   let total = 0;
//   for (let i of inputs){
//     total += i;
//   }
//   console.log(total);
//   }
// sum(1,2,3,4,5,6,7,8,9,);


//spread operator
// function sum(a,b,c){
//   console.log(a+b+c);
// }
// sum(1,2,3);


// var arr1 =[5,2,7];
// sum.apply(null,arr1);
// // es6
// function sum(a,b,c){
//   console.log(a+b+c);
// }



// var arr1 =[5,2,7];
// console.log(...arr1);
// sum(...arr1);

//  let arr2 = [1,2,3];
//  let arr3 = [4,5,6];
//  arr1 = arr2.concat(arr3);
//  console.log(arr2);

 // replace concat()
//  let arr1 = [1,2,3];
//  let arr2 = [4,5,6];
//  let arr3 = [7,8,9];
//  arr1 = [...arr1,...arr2];
//  console.log(arr1)

 //class,objects and inheritance
//   class students{
//     constructor(name,age,cls){
//       this.myname = name;
//       this.myage = age;
//       this.mycls = cls;
//     }
//     Biodata(){
//       console.log(`Hi My name is ${this.myname}. I am ${this.myage} years old and I am in class ${this.mycls}`);

//     }
//   }
// class Player extends students{

// }


//   let obj1 = new students('jaiki',28,'cs');
//   let obj2 = new students('Ajay',27,'MBA');
//   obj1.Biodata();
//   obj2.Biodata();

// async/await

function getData(){
 
}

getData();




