const account = {
  name: "Ali",
  balance: 5000,
  status: "active",
  transactions: 12,
  transaction: 12,
};
let count = 0;
for (key in account) {
  if (typeof account[key] == "number") {
    count++;
  }
}
console.log(`Total numeric properties: ${count}`);
