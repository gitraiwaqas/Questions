const device = {
  brand: "Samsung",
  model: "S21",
  battery: 4000,
  price: 120000,
  year: 2020,
};

let sum = 0;

for (key in device) {
  if (typeof device[key] == "number") {
    sum += device[key];
  }
}
console.log(sum);
