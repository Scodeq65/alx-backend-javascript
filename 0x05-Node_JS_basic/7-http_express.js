const express = require('express');
const fs = require('fs');

// Create an Express app
const app = express();

// Function to count students
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Trim the data and split it into lines
        const lines = data.trim().split('\n');

        // Handle empty file or header-only file
        if (lines.length <= 1) {
          resolve('This is the list of our students\nNumber of students: 0');
          return;
        }

        // Extract the headers and data
        const header = lines[0].split(',');
        const records = lines.slice(1).filter((line) => line.trim() !== '');

        // Count total students
        const totalStudents = records.length;

        // Initialize a map to group students by their field
        const fieldMap = {};

        for (const line of records) {
          const fields = line.split(',');
          const firstname = fields[header.indexOf('firstname')];
          const field = fields[header.indexOf('field')];

          if (!fieldMap[field]) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(firstname);
        }

        // Create the response string
        let response = `This is the list of our students\nNumber of students: ${totalStudents}`;
        for (const [field, names] of Object.entries(fieldMap)) {
          response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        }

        resolve(response);
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

// Set up the "/" route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set up the "/students" route
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Get the database path from command-line arguments
  countStudents(databasePath)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

// Export the app and listen on port 1245
module.exports = app;
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
