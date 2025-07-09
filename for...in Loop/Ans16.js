const data = {
  user1: "active",
  user2: "inactive",
  user3: "active",
  user4: "inactive",
  user5: "active",
};
let count = 0;
for (key in data) {
  if (data[key] === "active") {
    count++;
  }
}

console.log(`Total active users: ${count}`);
