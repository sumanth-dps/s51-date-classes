import "./App.css";
import moment from "moment";
import "moment/locale/te";

function App() {
  moment.locale("te");
  let monthsArray = [
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
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let independenceDay = new Date(1947, 7, 15, 0, 20, 30, 400);
  //console.log(independenceDay.setFullYear(2047));
  console.log(independenceDay.getFullYear());
  console.log(monthsArray[independenceDay.getMonth()]);
  console.log(independenceDay.getDate());
  console.log(daysArray[independenceDay.getDay()]);
  console.log(independenceDay.getHours());
  console.log(independenceDay.getMinutes());
  console.log(independenceDay.getSeconds());
  console.log(independenceDay.getMilliseconds());
  console.log(independenceDay.getTime());
  // let oldDate = new Date("06 October 2010");
  // console.log(oldDate);

  return (
    <div>
      <h1>Learning Date Methods</h1>
      <form>
        <div>
          <label>Batch Start Date</label>
          <input
            type="date"
            onChange={(eo) => {
              let batchStartDate = new Date(eo.target.value);
              let courseDuration = 120 * 24 * 60 * 60 * 1000;
              let courseEndDateInMS = batchStartDate.getTime() + courseDuration;
              let batchEndDate = new Date(courseEndDateInMS);
              console.log(batchStartDate);
              console.log(batchEndDate);
              console.log(
                moment(batchStartDate).format("MMMMM Do YYYY,h:mm:ss a")
              );
              console.log(moment(batchStartDate).add(120, "days").calendar());
            }}
          ></input>
          <button
            type="button"
            onClick={() => {
              console.log(Date.now());
              console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
            }}
          >
            Time in MS
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
