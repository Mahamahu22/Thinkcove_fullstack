
const totalHours = 24;
var wakeUpTime = 7;
var sleepTime = 22;
let activity = "";

if (wakeUpTime < 8) {
  let morningTask = "Exercise";
  activity = morningTask + " and have breakfast";
}

if (sleepTime > 21) {
  let nightTask = "Read a book";
  activity += ", then " + nightTask;
}

console.log("Total Hours in a Day:", totalHours);
console.log("Wake-up Time:", wakeUpTime + " AM");
console.log("Sleep Time:", sleepTime + " PM");
console.log("Planned Activity:", activity);
