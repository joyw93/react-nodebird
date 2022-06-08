const express = require("express");
const app = express();
const userRouter = require("./routes/user");


app.use((req, res, next) => {
  console.log("항상실행");
  req.user = "yong";
  next();
});

app.get("/", (req, res) => {
  let id = req.query.id || 100;
  console.log(req.user);
  res.send(String(id));
});

// app.get("/:id", (req, res) => {
//   let id = req.params.id || 1;
//   console.log(id)
//   res.send(id);
// });

app.listen(3080, () => {
  console.log("http://127.0.0.1:3080");
});
