const checkTheFun = (value) => {
  if (value === null) {
    console.log("Primitive Value.");
    return;
  }
  if (typeof value == "object" || typeof value == "function") {
    console.log("Non-primitive Value.");
  } else {
    console.log("Primitive Value.");
  }
};

const rai = { name: "Waqas" };
console.log(typeof rai);
console.log(typeof null);

checkTheFun(rai);
