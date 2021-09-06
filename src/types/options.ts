import { IAirSigmetOptions } from "./options/AW/airsigmet";
import { IAircraftReportsOptions } from "./options/AW/aircraftreports";
import { IGAirmetOptions } from "./options/AW/g-airmet";
import { IMetarOptions } from "./options/AW/metar";
import { IStationOptions } from "./options/AW/station";
import { ITafOptions } from "./options/AW/taf";

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
