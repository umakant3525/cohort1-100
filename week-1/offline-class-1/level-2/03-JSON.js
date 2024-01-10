// function jsonMethods(jsonString) {
//   console.log("Original JSON String:", jsonString);

//   // Parsing JSON string to JavaScript object
//   let parsedObject = JSON.parse(jsonString);
//   console.log("After JSON.parse():", parsedObject);

//   // Stringifying JavaScript object to JSON string
//   let jsonStringified = JSON.stringify(parsedObject);
//   console.log("After JSON.stringify():", jsonStringified);
// }

// // Example Usage for JSON Methods
// const sampleJSONString =
//   '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

// jsonMethods(sampleJSONString);

const user = {
  name: "Umakanant",
  age: 21,
  gender: "male"
};

let a1 = JSON.stringify(user); 
console.log(a1);

let a2 = JSON.parse(a1); 
console.log(a2);

