const checkType = (value) => {
  return typeof value;
};

console.log(checkType(123));
console.log(checkType("hello"));
console.log(checkType(true));
console.log(checkType([1, 2, 3]));
console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType(() => {}));
