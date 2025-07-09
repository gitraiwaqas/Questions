const report = {
  section1: {
    completed: true,
    score: 78,
  },
  section2: {
    completed: false,
    score: 62,
  },
  section3: {
    completed: true,
    score: 90,
  },
   section4: {
    completed: true,
    score: 30,
  },
};
let sum = 0;
for (key in report) {
  if (report[key].completed === true) {
    sum += report[key].score;
  }
}
console.log(sum);
