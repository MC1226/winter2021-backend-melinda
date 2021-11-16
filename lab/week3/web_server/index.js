// Use the express package by using const express.
const express = require("express");

// Use the body-parser package.
const bodyParser = require("body-parser");

// Creates an Express oject from the Express package.
const app = express();

// Allows Express to use th HTTP module of Node.
const http = require("http").Server(app);

// Necessary settings for body-parser, which automatically detects and converts JSON in out HTTP request.
app.use(express.json({strict: false}));

app.use(express.urlencoded({extended: true}));

const port = 3000;

// In order to finish creating a server you have to tell it what port to listen to.
// Tells Express/HTTP module what port to listen to. The most common port to use is 3000.
http.listen(port); // Common Development Ports: 8080, 3000 for Node.

console.log("Express server is running on port " + port + ".");

// Express Routes. Allows us to "redirect" a URL filepath to a specific folder.
app.use("/", express.static("public_html/"));

// This .post() method handles any POST requests made by the / test filepath. When a request is made, run the callback function.
app.post("/test", function(request, response){
    
    // Data from the front end is located inside of request.body;
    

    // The following code only runs when a request is made.
    console.log("The front end sends the following:", request.body);

    // We send a response to the front-end client with a Status Code of 200 (which means ok).
    response.sendStatus(200);

});