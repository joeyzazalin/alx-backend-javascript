const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

// Create an HTTP server and assign it to the variable `app`
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentInfo = await countStudents(databasePath);
      res.end(studentInfo);
    } catch (error) {
      res.end(error.message);
    }
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the server
module.exports = app;