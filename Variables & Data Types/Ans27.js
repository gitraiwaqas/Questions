// Create a function that takes two parameters: a value and a type string. Return `true` if the value is of that type.

const checkType = (value, str) => {
  return typeof value === str;
};

console.log(checkType("23", "Rai"));
console.log(checkType(23, "number"));
