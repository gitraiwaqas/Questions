const userInput = {
  username: "  waqas ",
  email: " waqas@example.com ",
  password: "123456",
  city: "  Lahore",
  bio: "  Hello, world!   ",
};
let newUser = {};
for (key in userInput) {
  if (typeof userInput[key] === "string") {
    newUser[key] = userInput[key].trim();
  }
}
console.log(newUser);
