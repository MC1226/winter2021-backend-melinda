// Use the express package by using const express.
const express = require("express");


// Creates an Express oject from the Express package.
const app = express();

// Allows Express to use th HTTP module of Node.
const http = require("http").Server(app);

const port = 80;

// In order to finish creating a server you have to tell it what port to listen to.
// Tells Express/HTTP module what port to listen to. The most common port to use is 3000.
http.listen(port); // Common Development Ports: 8080, 3000 for Node.

console.log("Express server is running on port " + port + ".");

// Express Routes. Allows us to "redirect" a URL filepath to a specific folder.
app.use("/", express.static("public_html/"));