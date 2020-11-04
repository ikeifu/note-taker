// ==============================================================================
// DEPENDENCIES
// ==============================================================================

const path = require("path");
const express = require("express");
const router = express.Router();

// ==============================================================================
// HTML Routes
// ==============================================================================

// sends notes html page to client
router.get("/notes", function (req, res) {
  // makes notes.html page show up when url slug is "public/notes.html"
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Sets default page to the homepage, index.html file
router.get("*", function (req, res) {
  // if no matching route, then display index
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ==============================================================================
// Exports Module
// ==============================================================================

module.exports = router;
