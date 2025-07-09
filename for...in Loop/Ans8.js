const user = {
  name: "Ayaan",
  email: "ayaan@gmail.com",
  age: 21,
  verified: true,
};

for (key in user) {
  if (typeof user[key] != "boolean") {
    console.log(user[key]);
  }
}
