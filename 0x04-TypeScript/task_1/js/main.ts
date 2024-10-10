// Define the Teacher interface
export interface Teacher {
  readonly firstName: string; // Make firstName read-only
  readonly lastName: string;  // Make lastName read-only
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional property
  location: string;
  [key: string]: any; // Allow additional properties
}

// Directors interface that extends Teacher
export interface Directors extends Teacher {
  numberOfReports: number; // New required attribute
}

// Define an interface for printTeacher function
export interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
export const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the StudentClassInterface
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Create the StudentClass implementing the interface
export class StudentClass implements StudentClassInterface {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}

// Create a class that initializes a Teacher
export class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
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

// Create instances of teachers
const teacher1 = new TeacherClass("Oriyomi", "Sodeeq", true, "Lagos", 5);
const teacher2 = new TeacherClass("Gbonjubola", "Ifemi", false, "Los Angeles");

// Adding an additional attribute 'contract'
const teacher3: Teacher = {
  firstName: 'Adam',
  fullTimeEmployee: false,
  lastName: 'Ibrahim',
  location: 'London',
  contract: false,
};

// Display teacher and director data on the web page
const displayTeacherInfo = (teacher: Teacher) => {
  const teacherDiv = document.createElement("div");
  teacherDiv.textContent = `Name: ${teacher.firstName} ${teacher.lastName}, Location: ${teacher.location}`;
  document.body.appendChild(teacherDiv);
};

// Render the teachers on the page
displayTeacherInfo(teacher1);
displayTeacherInfo(teacher2);
displayTeacherInfo(teacher3);

// Director instance using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Required for Directors
};

// Display director info on the page
displayTeacherInfo(director1);

// Create an instance of StudentClass
const student1 = new StudentClass("Sodiq", "Agbaraojo");

// Display student info on the page
const displayStudentInfo = (student: StudentClassInterface) => {
  const studentDiv = document.createElement("div");
  studentDiv.textContent = `Student: ${student.displayName()}`;
  document.body.appendChild(studentDiv);
};

// Render the student on the page
displayStudentInfo(student1);

// Console logs for debugging
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
console.log(student1.displayName());
console.log(student1.workOnHomework());
console.log(printTeacher("Kola", "Lateefah"));
