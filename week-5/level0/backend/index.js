const express = require("express");
const cors = require("cors");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(404).json({
      msg: "You Send wrong inputs",
    });
    return;
  }

  todo.create({
    title: createPayload.title,
    description: createPayload.description,
    complited: false,
  });
  res.json({
    msg: "Todo created successfully",
  });
});

app.get("/todos", function (req, res) {
  todo.find().then((todos) => {
    res.json({ todos });
  });
});

app.put("/completed", async (req, res) => {
  console.log(req.body);
  const parsedResult = updateTodoSchema.safeParse(req.body);

  if (!parsedResult.success) {
    return res.status(411).json({
      message: "Wrong inputs",
    });
  }

  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    message: "Todo has been updated",
  });
});

app.listen(3000, () => {
  console.log("Server hosted in port 3000");
});
