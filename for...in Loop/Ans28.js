const product = {
  name: "Smartphone",
  brand: "Tech-One",
  model: "X100-Pro",
  warranty: "2 years",
  madeIn: "China",
};
let count = 0;
for (key in product) {
  if (typeof product[key] === "string" && product[key].includes("-")) {
    count++;
  }
}

console.log(`Values containing hyphens: ${count}`);
