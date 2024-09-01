const z = require("zod");

const createTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const updateTodo = z.object({
  id: z.string(),
  completed:z.boolean()
});

const deleteTodo = z.string()
  

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo:deleteTodo
};
