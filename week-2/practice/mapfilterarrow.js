// map filter arrow

//given an array give me a new array in which every value is multiply by 2

let input = [1,2,3,4]
// console.log(input)
// let newarr = []
// for(let i =0 ; i<input.length ; i++){
//     newarr.push(input[i]*2)
// }

// console.log(newarr)

// map 

function tranform(i){
    return i*2
}
//
 const output =input.map(tranform)

 console.log(output)

 // second method of map

 const out = input.map((i)=>{ return i*3 })
 console.log(out)



 // filter for

 const input2 = [1, 2, 34, 5, 56];

 const ans = input2.filter((n) => {
     if (n % 2 == 0) {
         return true; 
     } else {
         return false; 
     }
 });
 
 console.log(ans); // Output: [2, 34, 56]
 