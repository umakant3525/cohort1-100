// to validation of input 

/*
{
    title : string,
    description : string
}
{
    id : string
}
}
*/
const zod = require("zod");

// Schema for the first input structure
const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

// Schema for the second input structure
const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo: createTodo, 
  updateTodo: updateTodo,
};
