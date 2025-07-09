const contact = {
  name: "Ahmed",
  phone: "03123456789",
  email: "ahmed@example.com",
  verified: false,
};
let count = 0;
for (key in contact) {
  if (typeof contact[key] === "string") {
    count++;
  }
}
console.log(`Total string properties: ${count}`);
