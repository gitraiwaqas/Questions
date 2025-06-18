// 31. Use `typeof` on a function, an object, and a class.

const onlyForFun = () => {};
const onlyForObj = { name: "Waqas Rai" };
class onlyForClass {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }

  method1() {
    // Method logic
  }
}

console.log(typeof onlyForFun); //function
console.log(typeof onlyForObj); // Object
console.log(typeof onlyForClass); // function
