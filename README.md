# aviationweather - Fetch aviation weather data

Node.js engine for global aviation weather. Written with typescript.

# Examples

```ts
import { Client } from "../src/index.js";

const client = new Client({ debug: false });

client
  .AW({
    datasource: "METARS",
    stationString: "KJFK",
    hoursBeforeNow: 2,
  })
  .then((res) => {
    res.forEach((r) => console.log(r));
  });

client.AVT7("ZJQH").then((res) => {
  console.log(res);
});
```

# API Coverage

## AVIATION WEATHER CENTER

- METARs
- Aircraft Reports
- TAFs
- AIR/SIGMETs
- G-AIRMETs
- STATION INFO

## AVT7

- METAR

# Help or support

Join [discord server](https://discord.gg/8HhJu7MejR)
