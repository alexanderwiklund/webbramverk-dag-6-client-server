const express = require("express");

const router = express.Router();

let todos = [];

router.get("/read", (request, response) => {
  console.log({
    method: request.method,
  });

  response.json({
    status: "success",
    method: request.method,
    data: todos,
  });
});

router.post("/create", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const todo = {
    id: request.body.id,
    title: request.body.title,
    description: request.body.description,
  };

  todos.push(todo);

  response.json({
    status: "success",
    method: request.method,
    data: todo,
  });
});

router.put("/update/:todoId", (request, response) => {
  const todoId = request.params.todoId;

  const title = request.body.title;
  const description = request.body.title;

  const newTodo = {
    id: todoId,
    title,
    description,
  };

  const todoIndex = todos.findIndex((todo) => todo.id == todoId);
  todos[todoIndex] = newTodo;

  response.json({
    status: "success",
    method: request.method,
    data: newTodo,
  });
});

router.delete("/delete/:todoId", (request, response) => {
  const todoId = request.params.todoId;

  const todoIndex = todos.findIndex((todo) => todo.id == todoId);
  todos.splice(todoIndex, 1);

  response.json({
    status: "success",
    method: request.method,
    data: todoId,
  });
});

module.exports = router;
