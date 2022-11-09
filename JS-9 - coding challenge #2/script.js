// ! coding challenge #2

const marksWeight = 70;
const marksHeight = 1.69;

const johnsWeight = 80;
const johnsHeight = 1.68;

const jhonsBMI = johnsWeight / johnsHeight ** 2;
console.log("John", jhonsBMI);

const marksBMI = marksWeight / marksHeight ** 2;
console.log("Mark", marksBMI);

const markHigherBMI = jhonsBMI < marksBMI;
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark has a higher BMI (${marksBMI.toFixed(1)}) than John (${jhonsBMI.toFixed(1)})`);
} else {
  console.log(`John has a higher BMI (${jhonsBMI.toFixed(1)}) than Mark ${marksBMI.toFixed(1)}`);
}
