const express = require("express");
const app = express();

// http://     www.exmple.com   /people   /1                   ?name=mason
// protocol    domain           path      route params         query params

app.use((req, res, next) => {
  console.log(new Date());
  req.time = new Date();
  next();
});

function checkToken(req, res, next) {
  next();
}

//method  path
app.get("/people/:id", function(req, res) {
  res.send("Hello World!!!!!!!!!!!!!!!!");
});

app.get("/greeting", checkToken, (req, res) => {
  res.send("hello");
});

app.get("/greeting/:name", (req, res) => {
  const { name } = req.params;
  const { title } = req.query;
  res.send(`hello ${title}. ${name}`);
});

app.get("/time", (req, res) => {
  res.send(req.time);
});



app.use((req, res, next) => {
  const PeopleName =[];
  req.name = PeopleName;
  next();
});

app.get("/people", (req,res) => {
  res.json(req.name);
});

app.post("/people", (req,res) => {
  res.send(req.name);
});

app.listen(3000);