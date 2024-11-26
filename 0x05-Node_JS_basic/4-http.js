const http = require('http');

// Create the http server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.setHeader('Content-type', 'text/plain');
  // Write the response body
  res.end('Hello Holberton School!');
});

// Have the server listen on port 1234
app.listen(1245);

// Export the app for external use (if needed)
module.exports = app;
