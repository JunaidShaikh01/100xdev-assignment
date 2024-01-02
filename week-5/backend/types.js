const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.strong(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodo,
  updateTodo,
};
