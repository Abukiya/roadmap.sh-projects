import { addDays, format, getUnixTime, intervalToDuration } from "date-fns";
import datepicker from "js-datepicker";
import "js-datepicker/dist/datepicker.min.css";

const che =document.getElementById("check")


const mydate = new Date();
const formated = format(mydate, "MM/dd/yyyy");
const tomorrow = addDays(mydate, 2);
const result = getUnixTime(mydate);

const interval_result = intervalToDuration({
  start: new Date(1929, 0, 15, 12, 0, 0),
  end: new Date(1968, 3, 4, 19, 5, 0),
});
console.log(interval_result);

const picker = datepicker("#my-date");

che.addEventListener(
  "click",()=>{
    picker.show();
  }
)
