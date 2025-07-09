const formData = {
  name: "Rashid",
  email: "rashid@gmail.com",
  phone: "",
  age: 24,
  country: "",
  region: "",
};
let empty = 0;
for (key in formData) {
  if (formData[key] === "") {
    empty++;
  }
}
console.log(`Empty fields: ${empty}`);
