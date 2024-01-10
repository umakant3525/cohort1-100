//generate
//verify 
//decode

const jwt = require("jsonwebtoken");

const value ={
    name : "Umakant",
    accountNumber : 123456
}

const token = jwt.sign(value,"password");
console.log(token)

const decodevalue = jwt.decode(token);
console.log(decodevalue)

const verifyvalue = jwt.decode(token,"password");
 console.log(verifyvalue)


// const verifyvalue = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVW1ha2FudCIsImFjY291bnROdW1iZXIiOjEyMzQ1NiwiaWF0IjoxNzA0MzAyMzk2fQ.dK00GlLwqID5jB_yUs682kiWYLCHeji18FwC-8291d8","password");
// console.log(verifyvalue)