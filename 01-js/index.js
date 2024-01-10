console.log("Hello World")
//console.log(a)  by this we can say that js is interpretted language

let number = 5;
number = "Hello ji"

console.log(number)

//variables
let a = 1;
 a = 4;
console.log(a);

var b = 45;
 b = 46;
console.log(b) ;

const pi = 3.14;
console.log(pi)

// datatypes

let firstName = "Umakant"
let age = 20
let isY = true

console.log(typeof(firstName))
console.log(firstName)
console.log(typeof(age))
console.log(age)
console.log(typeof(isY))
console.log(isY)


// if else 

//let isMarried = true
let isMarried = false

if (isMarried)
{
    console.log("Harkirat is married !")
}
else{
    console.log("Harkirat is not married !")
}


// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let sum = 0; 

for (let p = 0; p <= 1000; p++) { 
    sum += p;
}

console.log(sum);


// array

let arr1 = [ "umakant", "raman", "hrkirat", "kiran"];

console.log(arr1)
console.log(arr1[0])


// write a program of an even number in a array 

let ageArr = [21, 22, 34, 54, 23];
let newArr = []; 

for (let m = 0; m < ageArr.length; m++) {
    if (ageArr[m] % 2 === 0) {
        newArr.push(ageArr[m]); 
    }
}

console.log(newArr); 


// biggest number in array 
let numArr = [21, 22, 34, 54, 23];
let maxNumber = numArr[0]; // Assume the first element is the maximum

for (let z = 1; z < numArr.length; z++) {
    if (numArr[z] > maxNumber) {
        maxNumber = numArr[z]; // Update maxNumber if a larger value is found
    }
}

console.log("The largest number in the array is:", maxNumber);


// syntax of objects 

let user1 = {
    firstName : "Umakant",
    age : 22,
    college : "Mmcoe"
}

console.log(user1["firstName"])
console.log(user1.firstName)


// object of array

const allUser = [
    {
        firstName : "Gangotri",
        age : 122,
        college : "Mmcoe1",
        gender : "female"
    },
    {
        firstName : "Rekha",
        age : 222,
        college : "Mmcoe2",
        gender : "female"
    },
    {
        firstName : "Umakant3",
        age : 322,
        college : "Mmcoe3",
        gender : "male"
    },
    {
        firstName : "Anushaka",
        age : 322,
        college : "Mmcoe3",
        gender : "female"
    }
]

// console.log(allUser)

// console.log(allUser[0])

// console.log(allUser[0].firstName)

//

// check male or female 
for(let i=0; i<allUser.length; i++){
    if(allUser[i].gender == "female"){
        console.log(allUser[i].firstName)
    }
}

// reverse of array

let tArr = [11, 22, 33, 44, 55];
let newtArr = [];

for (let t = tArr.length - 1; t >= 0; t--) { 
    newtArr.push(tArr[t]); 
}

console.log(newtArr); 


// functions 

// sum of two numbers
 function twoSum(a1,a2){
    return a1 + a2 ;
}

console.log(twoSum(11,22))


// call back function 

function callSum(num1, num2, funCall){
    return funCall(num1+ num2)
}

function active(data){
    console.log("Result of sum is  : " + data)
}

function passive(data){
    console.log("Sum's result is  : " + data)
}

// call back 
callSum(12,30,active)
callSum(55, 6660,passive)


// setTimeout 

function greet1(){
    console.log("Hello1")
}

function greet2(){
    console.log("Hello2")
}

setTimeout(greet2,1000)
setTimeout(greet1,3000)

// setInterval 
setInterval(greet1,2000)


//counter in js from 30 to 1

// calculate time tkes betwwen settimeout and inner function actually runing 
// create a terminal clock (HH:MM:SS)

