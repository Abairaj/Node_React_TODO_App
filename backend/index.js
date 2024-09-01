require("dotenv").config();

const { todo } = require("./db");
const { createTodo, updateTodo, deleteTodo } = require("./types");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/todos", async (req, res) => {
  toDos = await todo.find({});
  return res.json({ todos: toDos });
});

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const validatedData = createTodo.safeParse(payload);
  if (!validatedData.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
    return;
  }
  await todo.create({
    title: validatedData.data.title,
    description: validatedData.data.description,
    completed: false,
  });

  res.json({ msg: "Todo Created Successfully" });
});

app.put("/completed", async (req, res) => {
  const payload = req.body;
  const validatedData = updateTodo.safeParse(payload);
  if (!validatedData.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
    return;
  }
  await todo.updateOne(
    { _id: validatedData.data.id },
    { completed: validatedData.data.completed }
  );
  res.json({ msg: "Todo updated Successfully" });
});

app.delete("/todo/:id", async (req, res) => {
  const payload = req.params;
  const validatedData = deleteTodo.safeParse(payload.id);
  if (!validatedData.success) {
    res.status(411).json({
      msg: "invalid input",
    });
    return;
  }
  await todo.deleteOne({ _id: payload.id });
  return res.status(200).json({ msg: "todo deleted successfully" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
