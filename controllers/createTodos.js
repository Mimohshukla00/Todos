const todos = require("../models/todos");
exports.createTodos = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodos = await todos.create({
      title,
      description,
    });
    res.status(200).json({
      status: "success",
      data: {
        newTodos,
      },
      message: "todo created succcessfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not created",
      error: error.message,
    });
  }
};
