import { Client } from "../src";

const myc = new Client({ debug: true });
myc
  .AW({
    datasource: "STATIONS",
    stationString: "EGKB",
    hoursBeforeNow: 1,
  })
  .then((res) => {
    console.log(res[0]);
  });

myc.AVT7("ZJQH").then((res) => {
  console.log(res);
});
