// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [key: string]: any; // Allow additional properties
}

// Create a class that initializes a Teacher
class TeacherClass implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Create a teacher instance
const teacher1 = new TeacherClass("Kola", "Oriyomi", true, "Lagos", 5);
const teacher2 = new TeacherClass("Kolawole", "Gbonjubola", false, "Los Angeles");

// Adding an additional attribute 'contract'
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Display data on the web page
const displayTeacherInfo = (teacher: Teacher) => {
  const teacherDiv = document.createElement("div");
  teacherDiv.textContent = `Name: ${teacher.firstName} ${teacher.lastName}, Location: ${teacher.location}`;
  document.body.appendChild(teacherDiv);
};

// Render the teachers on the page
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
displayTeacherInfo(teacher3);

console.log(teacher3);
console.log(teacher1);
console.log(teacher2);
