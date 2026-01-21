const router = require("express").Router();

router.use("/budget-items", require("./budgetItem"));
router.use("/transactions", require("./transaction"));
router.use("/category", require("./category"));
router.use("/api-docs", require("./apiDocs"));

module.exports = router;
