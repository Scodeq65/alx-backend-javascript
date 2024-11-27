// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle User input stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  console.log(`Your name is: ${input}`);

  // Exit the program gracefully
  console.log('This important software is now closing');
  process.exit();
});
