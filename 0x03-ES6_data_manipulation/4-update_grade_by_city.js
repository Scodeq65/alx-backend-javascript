function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // Find the grade for the student from newGrades
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);

      // Return a new object with the student information and the grade
      return {
        ...student, // Spread the student's original attributes
        grade: studentGrade ? studentGrade.grade : 'N/A', // Set the grade or 'N/A'
      };
    });
}

export default updateStudentGradeByCity;
