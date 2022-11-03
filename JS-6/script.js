// ! coding challenge #1

const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

const jhonsBMI = johnsWeight / johnsHeight ** 2;
console.log("John", jhonsBMI);

const marksBMI = marksWeight / marksHeight ** 2;
console.log("Mark", marksBMI);

const markHigherBMI = jhonsBMI < marksBMI;
console.log(markHigherBMI);
