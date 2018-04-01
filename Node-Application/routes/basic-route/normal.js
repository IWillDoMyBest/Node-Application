const express = require("express");
const router = express.Router();

router.route("/") 
	.get((req, res) => {
		//GET handler
	})
	.post((req, res) => {
		//POST handler
	});


module.exports = router;