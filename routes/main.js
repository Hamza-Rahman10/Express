// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

// ...etc, add your other routes here

router.get('/contact', (req, res) => res.send ('<h1>please contact me at hrahm002@campus.goldsmiths.ac.uk</h1>')) //route for contact information

router.get('/date', (req, res) => res.send ('18:20     23/10/2024')) //route for date

// Export the router object so index.js can access it
module.exports = router;
