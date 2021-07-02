const { db, port } = require("./conf.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.get("/places", (req, res) => {
  db.query("SELECT * from places", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/places", (req, res) => {
  const { adresse } = req.body;
  db.query("INSERT INTO places adresse =? ", [adresse], (err, response) => {
    if (err) {
      res.status(500).send("Error saving adresse");
    } else {
      res.status(200).send("Successfully saved !");
    }
  });
});
app.listen(port, () => {
  console.log("API running");
});
