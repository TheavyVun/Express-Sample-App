// Import required modules
const express = require("express");
const path = require("path");
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Pass control to the next middleware or route
});

// Middleware to parse JSON body
app.use(express.json());

// Static file middleware - serves files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Basic "Hello, World!" route
app.get("/basic", (req, res) => {
  res.send("Hello, World!");
});

// Dynamic route to greet users by name
app.get("/greet/:name", (req, res) => {
  const name = req.params.name; // Capture the "name" parameter
  res.send(`Hello, ${name}!`);
});

// Example route for POST requests (handling JSON data)
app.post("/api/users", (req, res) => {
  const { name, age } = req.body; // Extract name and age from request body
  res.json({
    message: `User ${name} of age ${age} has been created successfully!`,
  });
});

// Simulate an error route
app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong!");
  next(err); // Pass the error to the error handler
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
