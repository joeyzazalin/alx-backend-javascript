const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file content into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    lines.shift();

    // Create an object to store the students by field
    const studentsByField = {};

    // Process each line
    for (const line of lines) {
      const [firstname, , , field] = line.split(',');

      // Initialize the field array if not already done
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      // Add the student's firstname to the appropriate field
      studentsByField[field].push(firstname);
    }

    // Calculate the total number of students
    const totalStudents = lines.length;

    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const students = studentsByField[field];
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;