const logins = {
  Ali: 5,
  Sana: 0,
  Raza: 3,
  Hina: 7,
  Usman: 0,
};
let newLogs = {};
for (key in logins) {
  if (logins[key] > 0) {
    newLogs[key] = logins[key];
  }
}

console.log(newLogs);
