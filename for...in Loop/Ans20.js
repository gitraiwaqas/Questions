const student = {
  name: "Fatima",
  age: 20,
  grade: "A",
  scholarship: true,
};
let newStudent = {};
for (key in student) {
  if (typeof student[key] !== "boolean") {
    newStudent[key] = student[key];
  }
}
console.log(newStudent);
