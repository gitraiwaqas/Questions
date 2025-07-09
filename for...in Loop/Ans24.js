const comments = {
  Ali: "Nice work!",
  Sana: "Thanks for the help",
  Raza: "Ok",
  Hina: "This is amazing!",
  Zoya: "👍",
  Waqas: "I feel we are a good people."
};
let count = 0;
for (key in comments) {
  if (comments[key].length >= 10) {
    count++;
  }
}

console.log(`Comments longer than 10 characters: ${count}`);
