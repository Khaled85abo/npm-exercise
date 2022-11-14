const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// The Code below returns a wrong number of days for exe dec->30
// var getDaysInMonth = function (month, year) {
//   return new Date(year, month, 0).getDate();
// };
const getDaysInMonth = function (month, year) {
  return new Date(year, month + 1, 0).getDate();
};
export const timeHelper = ({ startDate, endDate }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const start = new Date(startDate);
  const end = new Date(endDate);
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDay = start.getDate();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  const endDay = end.getDate();
  const totalMonthDays = getDaysInMonth(endMonth, endYear);
  if (!startDate || !endDate) return "Date not Valide";

  if ((startYear === endYear) === currentYear) {
    if (
      startMonth === endMonth &&
      startDay === 1 &&
      endDay === totalMonthDays
    ) {
      return `${months[startMonth]}`;
    } else if (
      startMonth === 0 &&
      endMonth === 11 &&
      startDay === 1 &&
      endDay === totalMonthDays
    ) {
      return startYear;
    } else {
      return `${startDay} ${months[startMonth].slice(
        0,
        3
      )} - ${endDay} ${months[endMonth].slice(0, 3)}`;
    }
  } else if (
    startMonth === endMonth &&
    startDay === 1 &&
    endDay === totalMonthDays
  ) {
    return `${months[startMonth]} ${startYear}`;
  } else if (
    startMonth === 0 &&
    endMonth === 11 &&
    startDay === 1 &&
    endDay === totalMonthDays
  ) {
    return startYear;
  } else {
    return `${startDay} ${months[startMonth].slice(
      0,
      3
    )} ${startYear} - ${endDay} ${months[endMonth].slice(0, 3)} ${endYear}`;
  }
};
// console.log(
//   timeHelper({ startDate: "2021-08-01", endDate: "2021-08-31" }),
//   " == August"
// );
// console.log(
//   timeHelper({ startDate: "2021-05-01", endDate: "2021-05-31" }),
//   " == May"
// );
// console.log(
//   timeHelper({ startDate: "2021-01-01", endDate: "2021-12-31" }),
//   " == 2021"
// );
// console.log(
//   timeHelper({ startDate: "2018-01-01", endDate: "2018-12-31" }),
//   " == 2018"
// );
// console.log(
//   timeHelper({ startDate: "2021-01-05", endDate: "2021-03-15" }),
//   " == No valid period"
// );

// console.log('\n--------------\nHarder requirements ("extras"):');
// console.log(
//   timeHelper({ startDate: "2019-11-01", endDate: "2019-11-30" }),
//   " == November 2019"
// );
// console.log(
//   timeHelper({ startDate: "2018-08-01", endDate: "2018-08-31" }),
//   " == August 2018"
// );
// console.log(
//   timeHelper({ startDate: "2021-07-05", endDate: "2021-08-20" }),
//   " == 5 Jul - 20 Aug"
// );
// console.log(
//   timeHelper({ startDate: "2021-01-01", endDate: "2021-05-30" }),
//   " == 1 Jan - 30 May"
// );
// console.log(
//   timeHelper({ startDate: "2019-11-10", endDate: "2019-11-29" }),
//   " == 10 Nov 2019 - 29 Nov 2019"
// );
// console.log(
//   timeHelper({ startDate: "2021-10-18", endDate: "2021-10-24" }),
//   " == W42"
// );
