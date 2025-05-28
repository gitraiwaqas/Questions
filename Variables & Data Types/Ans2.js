let a = 10;
let b = 20;

console.log("Before Swaping...........");
console.log(`A: ${a}. B ${b}`);

console.log("After Swaping...........");
let c = a;
//  c=a  => c=10;

a = b;

//  a=b  => a=20;

b = c;

//  b=c  => b=10
console.log(`A: ${a}. B ${b}`);
