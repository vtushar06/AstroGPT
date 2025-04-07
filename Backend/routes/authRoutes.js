// const express = require("express");
// const { registerUser, loginUser } = require("../controllers/authController");
// const router = express.Router();

// // Routes for registration and login
// router.post("/register", registerUser);
// router.post("/login", loginUser);

// module.exports = router;
const express = require("express");
const { protectRoute } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/protected", protectRoute, (req, res) => {
  res.json({ message: "Welcome to the protected route!" });
});

module.exports = router;
