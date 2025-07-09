const users = {
  Areeba: "admin",
  Bilal: "editor",
  Hassan: "viewer",
  Zoya: "admin",
  Maria: "admin",
};
let count = 0;
for (key in users) {
  if (users[key] === "admin") count++;
}
console.log(`Total admins: ${count}`);
