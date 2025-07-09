const config = {
  mode: "dark",
  version: 3.2,
  autoUpdate: true,
  username: "admin",
  pass: "admin@123",
  retries: 5,
  backupEnabled: false,
};
let strCount = 0;
let numCount = 0;
let boolCount = 0;
for (key in config) {
  if (typeof config[key] === "string") {
    strCount++;
  } else if (typeof config[key] === "number") {
    numCount++;
  } else {
    boolCount++;
  }
}

console.log(`Strings: ${strCount}`);
console.log(`Numbers: ${numCount}`);
console.log(`Boolean: ${boolCount}`);
