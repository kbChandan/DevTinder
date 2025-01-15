const express = require("express");
const app = express();

const { userAuth, adminAuth } = require("./middleware/auth");

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

// error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});
app.get("/error", (req, res, next) => {
  const err = new Error("This is a simulated error.");
  next(err); // Pass the error to the global error-handling middleware
});
//middleware for authenication
// const authentication = (req, res, next) => {
//   console.log("req.authentication:", req.authentication);
//   if (!req.authentication) {
//     return res.status(401).send("unauthorised");
//   }
//   next();
// };
app.get("/protected-route", userAuth, (req, res, next) => {
  res.send("you have access!");
});

// admin
app.use("/admin", adminAuth);

app.use("/admin/getAllData", (req, res, next) => {
  res.send("All data sent");
});
app.use("/admin/delete", (req, res, next) => {
  res.send("deleted user");
});
app.listen(4001, () => {
  console.log("Im king");
  console.log("Server is up and running succesfully");
});
