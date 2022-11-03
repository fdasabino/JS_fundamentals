// * Switch statements

const day = prompt("Enter your favaorite week day: ").trim().toLowerCase();

switch (day) {
  case "monday":
    console.log("School");
    console.log("Gym");
    break;
  case "tuesday":
    console.log("School");
    console.log("Clean pool");
    break;
  case "wednesday":
  case "thursday":
    console.log("School");
    console.log("work");
    break;
  case "friday":
    console.log("school");
    console.log("work");
    break;
  case "saturday":
    console.log("work");
    break;
  case "sunday":
    console.log("Enjoy the day");
    console.log("Study");
    break;
  default:
    console.log("Not a valid day");
}

// ? same actions with if/else statements

if (day === "monday") {
  console.log("School");
  console.log("Clean pool");
} else if (day === "tuesday") {
  console.log("School");
  console.log("Clean pool");
} else if (day === "wednesday" || day === "thursday") {
  console.log("School");
  console.log("work");
} else if (day === "friday") {
  console.log("school");
  console.log("work");
} else if (day === "saturday") {
  console.log("work");
} else if (day === "sunday") {
  console.log("Enjoy the day");
  console.log("Study");
} else {
  console.log("Not a valida day");
}
