// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var tables= [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "hotRestaurant.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Displays all resereved tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays people on waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
