const path = require("path");
const express = require("express");
const server = express();
const port = 4000;

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

server.use(express.static("public"));
