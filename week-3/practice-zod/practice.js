// const express = require("express");
// const zod = require("zod");
// const PORT = 3000;

// const app = express();
// app.use(express.json());

// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}`);
// });

// const schema1 = zod.array(zod.number());

// app.get("/arrschema", function (req, res) {
//   res.send("Array schema by the zod");
// });

// app.post("/arrschema", function (req, res) {
//   const { kidneys } = req.body;

//   const response = schema1.safeParse(kidneys);

//   if (!response.success) {
//     return res.status(400).json({
//       msg: "Input is invalid for arrschema",
//     });
//   }

//   res.status(200).json({
//     msg: "Input is valid for arrschema",
//   });
// });

// const schema2 = zod.object({
//   email: zod.string(),
//   password: zod.string(),
//   country: zod.union([zod.literal("IN"), zod.literal("US")]),
//   myarr: zod.array(zod.number()),
// });


// // {
// //   "email": "dummy@example.com",
// //   "password": "DummyPassword123",
// //   "country": "US",
// //   "myarr": [1, 2, 3]
// // }

// app.get("/objschema", function (req, res) {
//   res.send("Object schema by the zod");
// });

// app.post("/objschema", function (req, res) {
//   const { body } = req;

//   const response = schema2.safeParse(body);

//   if (!response.success) {
//     return res.status(400).json({
//       msg: "Input is invalid for objschema",
//     });
//   }

//   res.status(200).json({
//     msg: "Input is valid for objschema",
//   });
// });



//--------------------zod validation -------------------------------

const zod = require("zod");

function validateInput(obj){
    const schema3 = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    });

    const validationResult = schema3.safeParse(obj);
    console.log(validationResult);
}

validateInput({
    email : "umakant@gmail.com",
    password : "AAaadddd"
});
