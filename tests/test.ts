import { Client } from "../src";

const myc = new Client({ debug: true });
myc
  .AW({
    datasource: "TAFS",
    stationString: "YMML",
    hoursBeforeNow: 1,
  })
  .then((res) => {
    console.log(res[0]);
  });

// myc.AVT7("ZJQH").then((res) => {
//   console.log(res);
// });
