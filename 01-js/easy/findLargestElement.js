/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/


let numbers = [ 3, 7, 2, 9, 1];
let maxNumber = numbers[0]; 


function findLargestElement(numbers) {
    for(i=0; i<numbers.length; i++){
        if(numbers[i] > maxNumber){
            maxNumber = numbers[i]
        }
    }
}

module.exports = findLargestElement;
