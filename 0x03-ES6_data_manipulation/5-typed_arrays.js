function createInt8TypedArray(length, position, value) {
  // Step 1: Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Step 2: Create a DataView to work with the buffer
  const dataView = new DataView(buffer);

  // Step 3: Check if the position is within range
  if (position >= length) {
    throw new Error('Position outside range'); // Error if position is out of bounds
  }

  // Step 4: Set the value at the specified position
  dataView.setInt8(position, value);

  // Step 5: Return the DataView
  return dataView;
}

export default createInt8TypedArray;
