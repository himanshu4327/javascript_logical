// //1
// function fruit(){
//     // name="abc"  // we can declare before also.
//     console.log(name) //undefined  //in hoisting we can use that variable without using it and after that we declare it.
//     console.log(price) //error //hoisting rule does not apply on the let and const.befor declaring that

//     var name="apple"
//     let price= 20
// }
// fruit()

// //2
// for (var i = 0; i < 3; i++) {  //we know setTimeout take some time ,so before this our loop is executed completely ,so when settimeout will execute at that time in global scope (i) value is 3.
//     setTimeout(() => console.log(i), 1)   //3,3,3
// }

// //3
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),1000)   //0,1,2
// }

// //4
// console.log(+true)  //1  //whenever we put +sign before (string,boolean) it converts to number.
// console.log(typeof +true)  //number

// //5
// console.log(!"mohit")  //the negation of string is "false"
// console.log(typeof("mohit"))

// //6
// let data="size"
// const bird={
//     size:"small",
// };
// console.log(bird[data])  //[] ke ander koi value hai to vo uske key se check karega.
// console.log(bird["size"])  // small
// console.log(bird.size)   //small
// console.log(bird.data)   // undefined //we can't put variable

// //7
// let c ={ name : "peter"}  //in object it takes the refernce
// let d;

// d=c;
// c.name = "mohit";
// console.log(d.name)

// //8
// var x
// var x=10        //we can't use let and const because x is already available.
// console.log(x)

// //9
// var x
// let x=10        //we can't use let and const because x is already available.
// console.log(x)

// //10
// let a= 3
// let b= new Number(3)   //when we use new it returns object
// console.log(a==b)       //true
// console.log(a===b)      //false
// console.log(typeof b)       //object

// //11
// let name;
// nmae={};    //typo !
// console.log(name)

// //12
// function fruit(){
//     console.log("woof!")        //woof!
// }
// fruit.name="apple";         //we assign value only in object not in function
// console.log(fruit())        //undefined

// //13
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,"2"))  //when he see any string it just concatenate that.

// //14
// let number=0
// console.log(number++)   //0
// console.log(++number)  //2
// console.log(number)     //2

// //15
// function getAge(...args) {
//     console.log(typeof args)
// }
// getAge(21)

// //16
// function getAge(){
//     // 'use strict';
//     age=21
//     console.log(age);  //21 without strict
// }
// getAge()

// //17
// const sum=eval('10+5*5');
// console.log(sum);

// /18
//How long is cool_secret accessible
// sessionStorage.setItem('cool_secret',123)

// //19
// const obj={1:"a", 2:"b" ,3:"c"};
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

// //20
// const obj={a:"one", b:"two",a:"repeat"}
// console.log(obj)

// //21


function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
  