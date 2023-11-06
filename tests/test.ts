import { getMetar } from "../dist/index.js";

getMetar({ ids: "KJFK", format: "json" }).then(({ data }) => console.log(data));
