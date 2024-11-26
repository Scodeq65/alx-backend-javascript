const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronousely
    const data = fs.readFileSync(path, 'utf-8').trim();

    // Split the file into lines
    const lines = data.split('\n');

    // Handles empty file or header-only file
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract the headers and data
    const header = lines[0].split(',');
    const records = lines.slice(1).filter((line) => line.trim() !== '');

    // Count total students
    console.log(`Number of students: ${records.length}`);

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

    // Print students grouped by field
    for (const [field, names] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
