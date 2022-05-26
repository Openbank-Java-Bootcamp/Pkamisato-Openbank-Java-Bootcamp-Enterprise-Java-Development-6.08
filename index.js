// The `movies` array from the file `./data.js`.
const movies = require("./data");
console.log("movies", movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = movies.map((movie) => movie.director);

console.log(getAllDirectors);
console.log(
  "================================================================================"
);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = 0;
const filteredMovies = movies.filter((movie) => {
  if (movie.genre.includes("Drama") && movie.director === "Steven Spielberg") {
    howManyMovies++;
  }
});
console.log("Steven Spielberg directed ", howManyMovies, "dramas");
console.log(
  "================================================================================"
);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const totalScores = movies.reduce(
  (accum, currValue) => accum + currValue.score,
  0
);

const scoresAverage = totalScores / movies.length;
console.log("The Scores averages is ", scoresAverage.toFixed(2));
console.log(
  "================================================================================"
);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = movies.filter( movie => movie.genre.includes("Drama")).map( movie => movie.score);
const sumScores = dramaMoviesScore.reduce(
    (accum, currValue) => accum + currValue,
    0
  );  
  const scoresAverageDrama = sumScores / dramaMoviesScore.length;
  console.log("The Scores averages is ", scoresAverageDrama.toFixed(2));
  console.log(
    "================================================================================"
  );
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies.slice().sort((a,b) =>a.year - b.year);
console.log("OrderByYear:", orderByYear);
console.log(
  "================================================================================"
  );
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = movies.slice().sort((a,b) =>  a.title.normalize().localeCompare(b.title.normalize())).splice(0,20);

console.log("orderAlphabetically :", orderAlphabetically);  
console.log(
  "================================================================================"
  );
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies.map(movie => {
    movie.duration.split(" ")
});
console.log(turnHoursToMinutes);  
console.log(
  "================================================================================"
  );
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}
