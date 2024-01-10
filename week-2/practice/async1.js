//1. callback function -----------------------------
function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }

  function quad(n) {
    return n * n * n*n;
  }
  
  // generic solution with normal logic  
  function sumOfNormal(a, b) {
    let square1 = square(a);
    let square2 = cube(b);
    return square1 + square2;
  }

  let ans = sumOfNormal(7, 8 );
  console.log(ans);
 

  // this is the logic for callback function 
  function sumOfcall(a, b ,call) {
    let square1 = call(a);
    let square2 = call(b);
    return square1 + square2;
  }
  
  let ans1 = sumOfcall(7, 8 , square);
  console.log(ans1);

  let ans2 = sumOfcall(7, 8 , cube);
  console.log(ans2);

  let ans3 = sumOfcall(7, 8 , quad);
  console.log(ans3);

  //2.async function ----------------------------------------
 let a = 1;
 console.log(a)

const { error } = require("console");
 //this wil take time if file is big
const fs = require("fs")

// asyn functin 1
fs.readFile("a.txt","utf-8",function(err,data){
          console.log("data:")  
          console.log(data)
})

// async function 2
setTimeout(function(){console.log("asyn function setimrout")},5000)

// file read ke pahile ho rha hai dekh output 
let sum =0 ;
for (let i= 0;i<100000;i++){
  sum = sum+i;
}
console.log(sum)

//output

//1
//4999950000
//data:
//"This is text file bro how are you ...........! "


//2. Promises -------------------------- cleaner way to write ascn or call backs
 
// let p = new Promise(function(resolve,reject){
//  resolve(value)
// reject(error) })

//.then  .catch
 
 
function ownsetTimeout(duaration){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()},duaration)
  })
}

let a1 = ownsetTimeout(1000)
a1.then(function(){console.log("I am 2000") } )

ownsetTimeout(4000).then(function(){ console.log("I am 4000")})
ownsetTimeout(6000).then(function(){console.log("I am 6000")})
ownsetTimeout(8000).then(function(){console.log("I am 8000")})
ownsetTimeout(10000).then(function(){console.log("I am 10000")})


// input output call ---> Network call