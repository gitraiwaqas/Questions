const product = {
  name: "Laptop",
  brand: "Dell",
  inStock: true,
  price: 85000,
};

for (key in product) {
  if (key.startsWith("p")) {
    console.log(`${key}: ${product[key]}`);
  }
}
