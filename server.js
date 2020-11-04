// ==============================================================================
// DEPENDENCIES
// ==============================================================================

const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("path");

// ==============================================================================
// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
// ==============================================================================

// creates instance of express module in app variable
const app = express();
// allows app to use the static resources in the public folder, essential for linking the stylesheets
app.use(express.static(path.join(__dirname, "/public")));

// Sets up the Express app to handle data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// specifing the routing folders https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// exporting the app instances to the routing folders
module.exports = app;

// ==============================================================================
// PORT
// Sets an initial port. If 8080 is usedm it'll use a different one
// ==============================================================================

const PORT = process.env.PORT || 8080;

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
  console.log(`Listening to PORT ${PORT}`);
});
