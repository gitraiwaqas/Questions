const profile = {
  name: "Iqra",
  hobbies: ["reading", "painting"],
  age: 27,
  languages: ["Urdu", "English", "French"],
  nonlanguages: ["Urdu", "English", "French"],
  city: "Lahore",
};

let arrCount = 0;
for (key in profile) {
  if (Array.isArray(profile[key])) {
    arrCount++;
  }
}
console.log(`Array properties: ${arrCount}`);
