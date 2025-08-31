// ! coding challenge #1

const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const johnsBMI = johnsWeight / johnsHeight ** 2;
console.log("John", johnsBMI);

const marksBMI = marksWeight / marksHeight ** 2;
console.log("Mark", marksBMI);

const markHigherBMI = johnsBMI < marksBMI;
console.log(markHigherBMI);
