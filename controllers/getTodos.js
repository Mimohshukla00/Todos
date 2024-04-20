const todos = require("../models/todos");
exports.getTodos = async (req, res) => {
  try {
    const todos = await todos.find();
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data is not created",
      error: error.message,
    });
  }
};

exports.getTodosbyID = async (req, res) => {
  try {
    const todos = await todos.findById(req.params.id);
    if (!todos) {
      res.status(400).json({
        status: "fail",
        message: "data is not found",
        error: error.message,
      });
    }
    res.status(200).json({
      status: "success",
      message: "Todos fetched successfully",
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error",
    });
  }
};
