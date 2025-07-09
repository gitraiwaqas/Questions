const user = {
  name: "Zain",
  age: 25,
  address: {
    city: "Lahore",
    zip: 54000,
  },
};

for (key in user) {
  console.log(`${key}: ${user[key]}`);
}
