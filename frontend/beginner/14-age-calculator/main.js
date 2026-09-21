import { addDays, format, getUnixTime } from "date-fns";

const mydate = new Date();
const formated = format(mydate, "MM/dd/yyyy");
const tomorrow = addDays(mydate, 2);

const result = getUnixTime(mydate);

console.log(result);
