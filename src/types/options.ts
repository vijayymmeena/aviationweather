import { IAirSigmetOptions } from "./options/AW/airsigmet.js";
import { IAircraftReportsOptions } from "./options/AW/aircraftreports.js";
import { IGAirmetOptions } from "./options/AW/g-airmet.js";
import { IMetarOptions } from "./options/AW/metar.js";
import { IStationOptions } from "./options/AW/station.js";
import { ITafOptions } from "./options/AW/taf.js";

export {
  IAirSigmetOptions,
  IAircraftReportsOptions,
  IMetarOptions,
  ITafOptions,
  IGAirmetOptions,
  IStationOptions,
};

export type IOptions =
  | IMetarOptions
  | ITafOptions
  | IAircraftReportsOptions
  | IAirSigmetOptions
  | IGAirmetOptions
  | IStationOptions;

export type IDatasourceType = IOptions["datasource"];
