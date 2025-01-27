const express = require('express');
const countStudents = require('./3-read_file_async');

// Create an instance of the Express application
const app = express();
const databasePath = process.argv[2];

// Define a route for the root URL that sends a plain text response
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for /students that sends the list of students
app.get('/students', async (req, res) => {
  try {
    const studentInfo = await countStudents(databasePath);
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or further configuration
module.exports = app;