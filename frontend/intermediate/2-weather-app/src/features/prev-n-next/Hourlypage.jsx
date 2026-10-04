import { useParams } from "react-router";
import {getPrevious24Hours, getNext24Hours } from "../../data/mockWeather";
import HourlySection from "./HourlySection";
export default function HourlyPage() {
  const { range } = useParams(); // "previous" or "next"

  const isPrevious = range === "previous";
  const hours = isPrevious ? getPrevious24Hours() : getNext24Hours();

  return (
    <HourlySection
      title={isPrevious ? "Previous 24 Hours" : "Next 24 Hours"}
      hours={hours}
    />
  );
}