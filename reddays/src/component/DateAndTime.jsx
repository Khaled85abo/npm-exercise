import { timeHelper } from "date-and-time-helpers-khaled";

 export default function DateAndTime ({ startDate, endDate }) {
    console.log(startDate, endDate)
  return (
    <>
      <h2>Dato and time component</h2>
      <p>{timeHelper({ startDate, endDate })}</p>
    </>
  );
};