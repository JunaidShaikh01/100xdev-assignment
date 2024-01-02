const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

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

app.put("/complete", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(404).json({
      msg: "Ypu sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      complete: true,
    }
  );
  res.json({
    msg: "Todo marked as completed ",
  });
});

app.listen(3000);