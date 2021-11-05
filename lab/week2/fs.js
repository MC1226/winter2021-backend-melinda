// This tells Node we would like to use fs package (fs module) in this JavaScript file.
const fs = require("fs");


// let someNumber = 50;

// someNumber = 100;

// .writeFileSync() - Writes a file to the same folder as this JavaScript file. You need 3 files/arguments within their own parenthesis separated by a comma: 1st Argument: File name, 2nd argument: File Content, 3rd Argument: Character Set.

// Synchronous JavaScript. Meaning this line will "block" any following code. That means the code after this line will NOT run until this line is done.
fs.writeFileSync("test.txt", "How are you doing today?", "utf-8");
// fs.writeFileSync("veryimportantinfo.txt", "Password: 123456", "utf-8");


// Asynchrounous JavaScript. This line runs, but also moves on to the code afterwards, and this line ends independently from the lines of code after it.
// fs.writeFile();


// .readFileSync() - Reads a file, and returns the contents of the file as a string. Arguments: File name, Character Set.
let fileContents = fs.readFileSync("veryimportantinfo.txt", "utf-8");

// Create a Date object.
let time = new Date();

// "\n" is an escaped character that represents a new line in text.
fileContents = fileContents + "\n" + time.toLocaleString("en-US");

fs.writeFileSync("veryimportantinfo.txt", fileContents, "utf-8");
