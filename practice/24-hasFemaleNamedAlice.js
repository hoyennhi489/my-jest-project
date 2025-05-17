// Check if there is a female student named Alice in the array

function hasFemaleNamedAlice(students) {
  return students.some(student => student.name === 'Alice' && student.gender === 'Nữ');
}
module.exports = hasFemaleNamedAlice;