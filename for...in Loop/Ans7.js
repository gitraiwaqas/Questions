const food = {
  fruit: "Apple",
  quantity: 10,
  isFresh: true,
  price: 50,
};

for (key in food) {
  if (typeof food[key] != "number") {
    console.log(`${key}`);
  }
}
