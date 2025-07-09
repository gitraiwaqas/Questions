const employee = {
  name: "Hassan",
  salary: 40000,
  department: "IT",
  name_of_the_dep: "IT",
};
let count = 0;

for (key in employee) {
  count++;
}

console.log(count);
