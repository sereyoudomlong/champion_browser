const express = require("express");
var cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

const fs = require("fs");
const centered = "../src/assets/champion/centered";

const champions = [];

fs.readdirSync(path.resolve(__dirname, centered)).forEach((file) => {
  if (file.endsWith("_0.jpg")) {
    champions.push(file);
  }
});

app.get("/api", (req, res) => {
  res.json({ message: champions });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
