const profile = {
  name: "Usman",
  age: 30,
  city: "Multan",
  isActive: true,
};
const copyProfile = {};
for (key in profile) {
  if (typeof profile[key] == "string") {
    copyProfile[key] = profile[key];
  }
}
console.log(copyProfile);

const secCopy = {};

for (key in profile) {
  if (typeof profile[key] == "number") {
    secCopy[key] = profile[key];
  }
}
console.log(secCopy);
