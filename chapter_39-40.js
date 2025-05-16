// Practice (Switch Statement)

/* 1. Switch Statement inside a Function */

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayName(6));

/* 2. Switch Statement inside a Loop */

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  switch (fruits[i]) {
    case "apple":
      console.log(`An apple a day keeps the doctor away.`);
      break;
    case "banana":
      console.log(`Life is full of banana skins.`);
      break;
    case "cherry":
      console.log(`Sweetness in every bite.`);
      break;
    default:
      console.log(`Ahh! Tummy's full.`);
  }
}

/*Using Switch with User Input (Prompt) */

let light = prompt("Enter traffic light color (red, yellow, green):").toLowerCase();

switch (light) {
  case "red":
    alert("Stop");
    break;
  case "yellow":
    alert("Get ready");
    break;
  case "green":
    alert("Go");
    break;
  default:
    alert("Invalid color");
}
