const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const { userAuth, adminAuth } = require("./middleware/auth");
const User = require("./models/user");
app.use(express.json());
// get all user
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("User not save to db", err.message);
  }
});
// Post user details
app.post("/signup", async (req, res) => {
  // const user = {
  //   firstName: "Deeps",
  //   lastName: "Acharya",
  //   age: 26,
  //   gender: "female",
  // };
  console.log(req.body);
  try {
    // create instance of user
    const use = new User(req.body);
    await use.save();
    res.send("successfully created user");
  } catch (err) {
    res.status(400).send("User not save to db", err.message);
  }
});
// Delete user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  console.log(req.body);
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send(user);
  } catch (err) {
    res.status(400).send("User is not deleted");
  }
});

// Patch
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("Updated the user");
  } catch (err) {
    console.log("Error while updating");
  }
});
connectDB()
  .then(() => {
    console.log("database connected successfully");
    app.listen(4001, () => {
      console.log("Server is up and running succesfully");
    });
  })
  .catch(() => {
    console.log("Database  connection error");
  });

// This will only handle api get call method
// app.get("/user", (req, res) => {
//   res.send("retrieved data successfully");
// });

// app.post("/user", (req, res) => {
//   res.send("sent successfully");
// });

// app.delete("/user", (req, res) => {
//   res.send("deleted successfully");
// });

// This will match all the api call method
// app.use("/user", (req, res) => {
//   res.send("user data successfully");
// });

// app.use("/deepi", (req, res) => {
//   res.send("How are u deepu rani");
// });

// params
// app.get("/profile/:id", (req, res) => {
//   console.log(req.params); //{ id: '1' }
//   res.send("Send the data successfully");
// });

// query
// app.get("/profile", (req, res) => {
//   console.log(req.query); //{ id: '1' }
//   res.send("Send the query successfully");
// });

//middleware for authenication
// const authentication = (req, res, next) => {
//   console.log("req.authentication:", req.authentication);
//   if (!req.authentication) {
//     return res.status(401).send("unauthorised");
//   }
//   next();
// };
// app.get("/protected-route", userAuth, (req, res, next) => {
//   res.send("you have access!");
// });

// admin middleware
// app.use("/admin", adminAuth);

// app.use("/admin/getAllData", (req, res, next) => {
//   res.send("All data sent");
// });
// app.use("/admin/delete", (req, res, next) => {
//   res.send("deleted user");
// });

// error handling middleware : Better make use of try and catch block inside route handler
// app.get("/error", (req, res, next) => {
//   const err = new Error("This is a simulated error.");
//   next(err); // Pass the error to the global error-handling middleware
// });
// app.use((err, req, res, next) => {
//   console.error("Error:", err.stack);
//   res.status(500).send("Something broke!");
// });
