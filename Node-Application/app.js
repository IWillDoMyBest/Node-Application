const express = require("express");
const session = require("express-session");
const express_validator = require("express-validator");
const path = require("path");
const body_parser = require("body-parser");
const nunjucks = require("nunjucks");

//Main application
var app = express();

//Static configuration
app.use(express.static("public"));

//View configuration
nunjucks.configure("views", {
    express: app,
    watch: true,
    autoescape: true
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "nunjucks");

//Middlewares
app.use(session({
    secret: "change me",
    resave: false,
    saveUninitialized: true
}))
app.use(express_validator());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

//Routes configuration
app.use(require("./routes/index"));

app.listen(3000, () => {
    console.log("Server is started..");
});