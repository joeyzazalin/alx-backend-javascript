const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL that sends a plain text response
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or further configuration
module.exports = app;