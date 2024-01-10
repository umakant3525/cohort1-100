// for loop is popular one 


let t1 = new Date().getSeconds(); // Correct method invocation: getSeconds() instead of getSecondes
let sum = 0;

for (let i = 0; i < 1000; i++) {
    sum = sum + i;
}

let t2 = new Date().getSeconds(); // Correct method invocation: getSeconds() instead of getSecondes

console.log(t2 - t1); 
console.log(sum); 

// functions 

// take input gives output

 const value = function findsum(n){
    let ans = 0;
    for(let i = 0 ; i<n; i++){
        ans = ans + i 
    }
    return ans;
}

console.log(value(100))
// console.log(findsum(100))


// call back function 

function direct(n){
    return n
}

function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function sumofsomething(a,b,callback){
    console.log(callback(a))
    console.log(callback(b))

    return callback(a) + callback(b)
}


console.log(sumofsomething(2,4,direct))
console.log(sumofsomething(2,4,square))
console.log(sumofsomething(2,4,cube))


// async await promises


// sync is called as sequentioally run code 
// asyc means parrallely

function find(n){

    console.log(n)
    console.log(" i wait for some time")
}

function find100(){
    return find(100)
}

console.log("Hello before")

setTimeout(find100, 4000);

 console.log("Hello after ")


 // async for read file 

 const  fs = require("fs");

 fs.readFile("a.txt","utf-8", function(arr,data){
    console.log(data)
 })


 console.log("Hi i am later on file read .")


 // Promises is syntatical sugar  or call pretty way to call the functions 


const { error } = require('console');
const fs = require('fs');

function hreadFile(){
    console.log("inside main hreadfile")
    return new Promise(function(resolve,reject){
        console.log("inside promise")
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve")
            resolve(data)
            reject(err)
        })
    })
}


hreadFile().then((data) => {console.log(data)
}).catch((err) =>{
   console.log(err) 
});


// simple syntax 

var p = new Promise(function(resolve,reject){
    resolve("problem resolved")
    reject("error")
})

p.then(console.log(p))




// without async await normal flow

function kiran1(){
    let p1 = new Promise(function(resolve){
        // add async logic here
        resolve("heelo ji 1")
    })
    return p1
}

function main1(){
    kiran1().then(function(value){
        console.log(value)
    })
}

main1()


// without  async await  with pending 

function kiran2(){
    return new Promise(function(resolve){
        setTimeout(function(){ resolve("heelo ji 2 for prnding ") } ,3000)
    })
}

 function main2(){

    let k2  =  kiran2()  // if await is not there so it is get pending
    console.log(k2)
}

main2()


// with async await 

function kiran3(){
    return new Promise(function(resolve){
        setTimeout(function(){ resolve("heelo ji 3 not pending because his friend wait for his output   ") } ,3000)
    })
}

 let t = async function main3(){
    // let k2 =  kiran()  // if await is not there so it is get pending
    let k3  = await kiran3()
    console.log(k3)
}

console.log(t)

//main3()


// finction 2 on pending------> Promise { <pending> }
// functiion 1 call ----------> heelo ji 
// function 3 -----------> heelo ji 3 not pending because his friend wait for his output 


console.log("Hello")