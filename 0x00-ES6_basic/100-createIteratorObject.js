export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  // Create a generator function to yield each employee
  function* employeeGenerator() {
    for (const department of Object.values(employees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator(); // Return the generator
}
