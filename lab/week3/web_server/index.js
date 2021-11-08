// Use the express package by using const.
const express = require("express");

const app = express();

// Allows Express to use th HTTP module of Node.
const http = require("http").Server(app);
// In order to finish creating a server you have to tell it what port to listen to.
// Tells Express/HTTP module what port to listen to. The most common port to use is 3000.
http.listen(3000);

console.log("Express server is running on port 3000.");

