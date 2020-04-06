const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serveStatic(path.join(__dirname, "/dist")));

// Catch all routes and redirect to the index file
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Listen on:" + port);
