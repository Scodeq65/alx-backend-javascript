// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "Agbaraojo",
    lastName: "Sodiq",
    age: 29,
    location: "Nigeria"
  };
  
  const student2: Student = {
    firstName: "Apeke",
    lastName: "Lateefah",
    age: 22,
    location: "Osun State"
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Function to render the student table
  function renderStudentTable(students: Student[]): void {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headerFirstName = document.createElement("th");
    headerFirstName.textContent = "First Name";
    const headerLocation = document.createElement("th");
    headerLocation.textContent = "Location";
  
    headerRow.appendChild(headerFirstName);
    headerRow.appendChild(headerLocation);
    table.appendChild(headerRow);
  
    // Append each student as a row in the table
    students.forEach(student => {
      const row = document.createElement("tr");
      const cellFirstName = document.createElement("td");
      cellFirstName.textContent = student.firstName;
      const cellLocation = document.createElement("td");
      cellLocation.textContent = student.location;
  
      row.appendChild(cellFirstName);
      row.appendChild(cellLocation);
      table.appendChild(row);
    });
  
    // Append the table to the body
    document.body.appendChild(table);
  }
  
  // Render the student table
  renderStudentTable(studentsList);
  