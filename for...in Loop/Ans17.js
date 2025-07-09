const inventory = {
  item1: 5,
  item2: 0,
  item3: 8,
  item4: 0,
  item5: 3,
};

let copyObject = {};
for (key in inventory) {
  if (inventory[key] > 0) {
    copyObject[key] = inventory[key];
  }
}
console.log(copyObject);
