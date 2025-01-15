const adminAuth = (req, res, next) => {
  console.log("req.authentication:", req.authentication);
  if (req.authentication) {
    return res.status(401).send("unauthorised user");
  }
  next();
};
const userAuth = (req, res, next) => {
  console.log("req.authentication:", req.authentication);
  if (req.authentication) {
    return res.status(401).send("unauthorised user");
  }
  //   const token = "xyz";
  //   if (!token === "xyz") {
  //     res.status(401).send("unauthorised");
  //   }
  next();
};

module.exports = {
  adminAuth,
  userAuth,
};
