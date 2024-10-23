// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Handle the routes
app.get("/", (req, res) => res.send("Hello World!")); //route to hello world
app.get('/about', (req, res) => res.send ('<h1>This is about page</h1>')) //route about page info
app.get('/contact', (req, res) => res.send ('<h1>please contact me at hrahm002@campus.goldsmiths.ac.uk</h1>')) //route for contact information
app.get('/date', (req, res) => res.send ('18:20     23/10/2024')) //route for date

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
