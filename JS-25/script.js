"use strict";

// ! Coding challenge #5

const calcAverage = (score1, score2, score3) => {
  return Number(score1 + score2 + score3 / 3);
};

const checkWinner = () => {
  const avgDolphins = calcAverage(44, 23, 71);
  const avgKoalas = calcAverage(65, 54, 49);

  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win by ${Number(
      avgDolphins - avgKoalas
    ).toFixed()} points. (${avgDolphins.toFixed()} vs ${avgKoalas.toFixed()})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win by ${Number(
      avgKoalas - avgDolphins
    ).toFixed()} points. (${avgKoalas.toFixed()} vs ${avgDolphins.toFixed()})`;
  } else {
    return "No team wins";
  }
};

console.log(checkWinner());
