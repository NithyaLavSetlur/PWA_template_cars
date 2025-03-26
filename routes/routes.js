const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require("path");
const dbPath = path.join(__dirname, "..", ".database", "datasource.db"); // correct path to the database file

// needed so you can I can interact with SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
  console.log("Connected to SQLite database");
});

// Route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Route for the catalog page (with cars database view)
router.get('/users', (req, res) => {
  db.all("SELECT * FROM cars", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: err.message });
    }
    res.render('index', { users: results });
  });
})

// Route for the about page
// router.get('/users', (req, res) => {
//   res.send('About Us');
// });

// Route with a dynamic parameter (e.g., user ID)
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Post request route to handle form submissions or data
router.post('/submit', (req, res) => {
  res.send('Form submitted');
});

// Export the router to be used in app.js
module.exports = { router, db };