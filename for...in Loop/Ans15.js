const marks = {
  math: 85,
  english: 78,
  physics: 92,
  chemistry: 88,
};
let sum = 0;
let count = 0;
for (key in marks) {
  sum += marks[key];
  count++;
}
console.log(sum);
console.log(count);

console.log(`Average marks: ${sum / count}`);
