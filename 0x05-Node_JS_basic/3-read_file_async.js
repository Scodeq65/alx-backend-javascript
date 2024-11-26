const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // reject the promise with an error message
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Trim the data and split it into lines
        const lines = data.trim().split('\n');

        // Handles empty file or header-only file
        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
          return;
        }

        // Extract the headers and data
        const header = lines[0].split(',');
        const records = lines.slice(1).filter((line) => line.trim() !== '');

        // Count total students
        console.log(`Number of students: ${records.length}`);

        // Initialize a map to group students by theri field
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

        // Print students grouped by field
        for (const [field, names] of Object.entries(fieldMap)) {
          console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(',')}`);
        }

        // Resolve the promise
        resolve();
      } catch (parseError) {
        // Reject the promise if parsing fails
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
