function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");


// my practice 

// console.log(parseInt("42"))
// console.log(parseInt("42px"))
// console.log(parseInt("3.14"))

// console.log(parseFloat("42"))
// console.log(parseFloat("42px"))
// console.log(parseFloat("3.14"))