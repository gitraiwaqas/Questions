const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  available: true,
};
let newMovie = {};
for (key in movie) {
  if (typeof movie[key] === "string") {
    newMovie[key] = movie[key];
  }
}

console.log(newMovie);
