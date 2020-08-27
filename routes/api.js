const express = require("express");
const router = express.Router();
const connection = require("../config/connection");

/**
 * GET - get facebook homepage
 * POST - write post to timeline
 * PUT - update something on server
 * DELETE - delete
 */

router.put("/complete/:id/:status", (req, res) => {
    connection.query("UPDATE todos SET complete = ? WHERE todoID = ?", [req.params.status, req.params.id], (err, results) => {
        if (err) console.log(err);
    });
});

module.exports = router;
