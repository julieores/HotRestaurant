// Each of the following arrays will hold a series of objects:
// Each object will contain 4 key-value pairs:
// {"customerName": "name" 
// "phoneNumber", "number"
// "customerEmail", "email"
// "customerID", "ID" <-- despite the example, we might want to build this in to auto-create

// We need one array to hold the current seated tables (first five reservations)
var seated = [];

// The "max" variable (currently set to 5) will hold the maximum table capacity
var max = 5

// When the number of reservations exceeds the number of available tables (5),
// All subsequent reservations will be pushed to the waitlist array
if (seated.length >=max){
    waitlist.push(//the next entry)
}
// 

// This array will hold the waiting list
var waitlist = [];

// This variable will store the number of empty tables, 
// to avoid using hard-coded numbers, and/or in case more than one table opens at a time?
var available = parseInt(max-seated.length);

// if a table opens up (seated < max), 

// the FIRST object in the waitlist needs to be pushed to the "seated" array
if(seated.length < max){
    waitlist.splice(0, available)
}
 
