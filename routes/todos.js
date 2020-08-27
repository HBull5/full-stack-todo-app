const express = require("express");
const router = express.Router();
const connection = require("../config/connection");

// login page
router.get("/", (req, res) => {
    res.render("login");
});

// register page
router.get("/register", (req, res) => {
    res.render("register");
});

// todos page
router.get("/todos", (req, res) => {
    connection.query("SELECT * FROM todos WHERE userID = ?", [1], (err, results) => {
        res.render("todos", { results });
    });
});

module.exports = router;
