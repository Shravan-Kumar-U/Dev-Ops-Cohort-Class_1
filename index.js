const express = require("express");
const app = express();

app.use(express.json());

// Bigger in-memory todo list
let todos = [
  { id: 1, task: "Learn JavaScript basics" },
  { id: 2, task: "Understand DOM manipulation" },
  { id: 3, task: "Practice array methods (map, filter)" },
  { id: 4, task: "Build a simple calculator" },
  { id: 5, task: "Create a Todo frontend UI" },
  { id: 6, task: "Connect frontend with backend" },
  { id: 7, task: "Learn Express.js basics" },
  { id: 8, task: "Understand REST APIs" },
  { id: 9, task: "Practice Git and GitHub" },
  { id: 10, task: "Build a mini project" },
  { id: 11, task: "Learn localStorage deeply" },
  { id: 12, task: "Add edit and delete features" },
  { id: 13, task: "Understand async/await" },
  { id: 14, task: "Learn Axios for API calls" },
  { id: 15, task: "Improve UI with CSS" }
];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});