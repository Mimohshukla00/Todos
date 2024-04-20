const express = require("express");
const app = express();

// to get instance of dotenv file
require("dotenv").config();

// to get out port out of .env file
const PORT = process.env.PORT || 3000;

// database connection

const connectDB = require("./Config/database").connectDB();

// middlewares
app.use(express.json());

// routes

const routes = require("./routes/todo");

// mount

app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/",(req,res)=>{
  res.send("<h1>HOME PAGE BABY</h1>")

})
