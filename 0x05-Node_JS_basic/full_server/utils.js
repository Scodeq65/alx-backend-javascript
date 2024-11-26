const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      try {
        const lines = data.trim().split('\n');
        const header = lines.shift().split(',');

        const fields = {};

        lines.forEach((line) => {
          const values = line.split(',');
          const firstname = values[header.indexOf('firstname')];
          const field = values[header.indexOf('field')];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        resolve(fields);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = readDatabase;
