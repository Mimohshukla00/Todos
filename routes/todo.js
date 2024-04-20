const express = require("express");
const router = express.Router();

// get instance of routes

const { createTodos } = require("../controllers/createTodos");
const { getTodos, getTodosbyID } = require("../controllers/getTodos");

//to add

router.post("/createTodos", createTodos);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodosbyID);
module.exports = router;
