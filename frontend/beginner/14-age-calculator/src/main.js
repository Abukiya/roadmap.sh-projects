import datepicker from "js-datepicker";
import "js-datepicker/dist/datepicker.min.css";

import { subDays, intervalToDuration, formatDuration } from "date-fns";

const display = document.getElementById("display");
const form = document.getElementById("form");

const today = new Date();
const yesterday = subDays(today, 1);

const picker = datepicker("#input_date", { maxDate: yesterday });
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (picker.dateSelected) {
    const birthdate = picker.dateSelected;
    const pre_result = intervalToDuration({ start: birthdate, end: today });
    const result = formatDuration(pre_result, {
      format: ["years", "months", "days"],
    });
    display.innerText = `You are ${result} old`;
  } else {
    display.innerText = "You have to select a date";
  }
});
