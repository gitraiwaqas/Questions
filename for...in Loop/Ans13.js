const vehicle = {
  type: "Car",
  brand: "Toyota",
  wheels: 4,
  electric: false,
  adav: true,
};
let booleanCopy = {};
for (key in vehicle) {
  if (typeof vehicle[key] === "boolean") {
    booleanCopy[key] = vehicle[key];
  }
}

console.log(booleanCopy);
