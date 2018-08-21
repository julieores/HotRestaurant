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

var tables = 5;
var tableReservations = [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "hotRestaurant.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all resereved tables
app.get("/api/tables", function (req, res) {
  return res.json(tableReservations);
});

// Displays people on waitlist
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});


// Create New Reservations - takes in JSON input
app.post("/api/tables", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware

  var newReservation = req.body;

  console.log(newReservation);

  if (tableReservations.length <= tables) {

    tableReservations.push(newReservation);

    res.json(true);

  } else {

    waitlist.push(newReservation);

    res.json(false);
  }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
