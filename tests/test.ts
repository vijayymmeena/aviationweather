import { Client } from "../src";

const myc = new Client({ debug: true });

myc
  .AW({
    datasource: "TAFS",
    stationString: "YMML",
    hoursBeforeNow: 1,
  })
  .then((res) => {
    console.log(res[0]?.forecast[1]?.sky_condition);
  });

// myc.AVT7("ZJQH").then((res) => {
//   console.log(res);
// });
