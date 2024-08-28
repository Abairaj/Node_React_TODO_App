const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const types = require("./types");
import { createTodo, updateTodo } from "./types";

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {});

app.post("/todo", (req, res) => {
  const payload = req.body;
  const validatedData = createTodo(payload);
  if (!validatedData.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
    return;
  }
});

app.put("/completed", (req, res) => {
  const payload = req.body;
  const validatedData = createTodo(payload);
  if (!validatedData.success) {
    res.status(411).json({
      msg: "Invalid input",
    });
    return;
  }
});

app.delete("/todo", (req, res) => {});
