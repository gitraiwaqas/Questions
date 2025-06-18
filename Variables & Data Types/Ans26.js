// Create an object and add/remove keys dynamically.

const mobile = {
  color: "black",
  price: "40,000",
  ram: "2GB",
  hard_desk: "600GB",
};
mobile.ram = "4GB";
delete mobile.hard_desk;

console.log(mobile);
