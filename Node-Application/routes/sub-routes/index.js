const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("index");
    })
    .post((req, res) => {
        //POST METHOD
    });

module.exports = router;