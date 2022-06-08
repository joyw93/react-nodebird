const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("항상실행");
  req.user = "yong";
  next();
});

app.use((req, res, next) => {
    

});

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("hello world");
});



app.listen(3080, () => {
  console.log("http://127.0.0.1:3080");
});
