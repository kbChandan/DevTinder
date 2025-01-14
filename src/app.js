const express = require("express");
const app = express();

// This will only handle api get call method
app.get("/user", (req, res) => {
  res.send("retrieved data successfully");
});

app.post("/user", (req, res) => {
  res.send("sent successfully");
});

app.delete("/user", (req, res) => {
  res.send("deleted successfully");
});

// This will match all the api call method
app.use("/user", (req, res) => {
  res.send("user data successfully");
});

app.use("/deepi", (req, res) => {
  res.send("How are u deepu rani");
});

// params
app.get("/profile/:id", (req, res) => {
  console.log(req.params); //{ id: '1' }
  res.send("Send the data successfully");
});

// query
app.get("/profile", (req, res) => {
  console.log(req.query); //{ id: '1' }
  res.send("Send the query successfully");
});

app.listen(4000, () => {
  console.log("Im king");
  console.log("Server is up and running succesfully");
});
