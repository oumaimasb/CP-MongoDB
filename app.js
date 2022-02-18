const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
  res.send("we are in home page");
});

app.get("/list", (req, res) => {
  res.send({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    age: req.body.age,
  });
});

app.post("/list", (req, res) => {
  const post = new Post({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    email: req.body.email,
    age: req.body.age,
  });
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

//connect to mongoDB
mongoose.connect("mongodb://localhost:4000", () =>
  console.log("connected to DB")
);

//start listning
app.listen(4000);
