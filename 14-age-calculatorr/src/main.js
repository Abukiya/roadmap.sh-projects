console.log("check");

import { addDays, intervalToDuration, formatDuration } from "date-fns";

import datepicker from "js-datepicker";
import "js-datepicker/dist/datepicker.min.css";

const today = new Date();
console.log(today);
const tomorrow = addDays(today, 1);
console.log(tomorrow);
const display = document.getElementById("age_display");

function calculate_age(date) {
  console.log(date);
  const result = intervalToDuration({ date, today });
  const text = formatDuration(result);
  console.log(text);
  display.innerText = text;
}

const picker = datepicker("#my-date", {
  onSelect: (instance, date) => {
    console.log(picker.dateSelected);
    calculate_age(date);
  },
});
