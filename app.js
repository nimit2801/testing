const express = require("express");
const app = express();

const port = process.env.port || 3001;
//Path
const path = require("path");
const rootDir = require("./utils/path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(port, () => {
  console.log("testing");
});
