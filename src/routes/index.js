const {
  default: isAuthenticated,
} = require("../middleware/auth/isAuthenticated");

const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.user !== undefined) {
    const { displayName, username } = req.session.user;
    res.send(`Logged in as ${displayName || username}`);
  } else {
    res.send("Logged out");
  }
});

router.use("/auth", require("./auth"));
router.use("/budget-items", isAuthenticated, require("./budgetItem"));
router.use("/transactions", isAuthenticated, require("./transaction"));
router.use("/api-docs", require("./apiDocs"));

module.exports = router;
