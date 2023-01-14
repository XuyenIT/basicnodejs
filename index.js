const express = require("express");
//goi module path
const path = require("path");
const app = express();
const port = 3000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//set static file
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  console.log(req.query);
  res.render("about");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("post method");
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
