const express = require("express");
const app = express();

app.use(express.json());

const people = [];

app.use("/", (req, res, next) => {
  res.setHeader("X-time", new Date());
  next();
});

app.get("/people", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = people.filter(i => i.name.includes(name));
    return res.json(filtered);
  }
  res.json(people);
});

app.post("/people", (req, res) => {
  const person = req.body;
  people.push(person);
  res.status(201).json(person);
});

app.listen(3000);
