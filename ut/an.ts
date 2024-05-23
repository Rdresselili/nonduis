// Define an interface for personal information
interface PersonalInfo {
  name: string;
  age: number;
}

// Create a student object with personal information
const student1: PersonalInfo = {
  name: "someone",
  age: 23
};

// Function to display student's personal information
function displayStudentInfo(student: PersonalInfo): void {
  console.log(`Student Name: ${student.name}, Age: ${student.age}`);
}

// Call the function with the student object
displayStudentInfo(student1);
