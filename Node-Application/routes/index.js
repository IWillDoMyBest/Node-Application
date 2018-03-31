const express = require("express");
const router = express.Router();

router.use("/", require("./sub-routes/index"));

module.exports = router;