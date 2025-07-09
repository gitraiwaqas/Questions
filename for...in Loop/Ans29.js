const data = {
  id: 101,
  name: "Waleed",
  email: null,
  phone: undefined,
  laptop: undefined,
  verified: true,
  address: "Lahore",
};
let count = 0;
for (key in data) {
  if (data[key] === null || data[key] === undefined) {
    count++;
  }
}
console.log(`Empty values (null or undefined): ${count}`);
