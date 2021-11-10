import { Client } from "../src/index.js";

const myc = new Client({ debug: false });

myc
  .AW({
    datasource: "METARS",
    stationString: "EGLC",
    hoursBeforeNow: 2,
  })
  .then((res) => {
    res.forEach((r) => console.log(r.sky_condition));
  });

// myc.AVT7("ZJQH").then((res) => {
//   console.log(res);
// });
