const express = require("express");
const app = express();
app.use("/deepi", (req, res) => {
  res.send("How are u deepu rani");
});
app.listen(4000, () => {
  console.log("Im king");
  console.log("Server is up and running succesfully");
});
