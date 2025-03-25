const express = require('express');
const router = express.Router();

// Route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

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
module.exports = router;
