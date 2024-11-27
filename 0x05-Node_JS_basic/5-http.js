const http = require('http');
const countStudents = require('./3-read_file_async');

// Retrieve the database path from command-line arguments
const path = process.argv[2];

// Check if the path argument is provided
if (!path) {
  console.error('Error: Database path is not provided');
  process.exit(1); // Exit if the path is missing
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(path);
      res.end(output);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Resource not found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app instance
module.exports = app;
