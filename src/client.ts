import {
  IAIREP,
  IAVT7Metar,
  IAirSigmet,
  IAirSigmetOptions,
  IAircraftReportsOptions,
  IClientOptions,
  IDatasourceType,
  IGAirMet,
  IGAirmetOptions,
  IMetaSkyCondition,
  IMetar,
  IMetarOptions,
  IOptions,
  IStation,
  IStationOptions,
  ITaf,
  ITafOptions,
} from "./index.js";
import axios from "axios";
import { parse } from "fast-xml-parser";
import { skyConditions } from "./Identifiers.js";

export class Client {
  private options?: IClientOptions;
  static api = {
    AW: "https://www.aviationweather.gov/adds/dataserver_current/httpparam",
    AVT7: "http://www.avt7.com/Home/AirportMetarInfo",
  };

  constructor(options?: IClientOptions) {
    this.options = options;
  }

  getSkyCondition(identifier: string): IMetaSkyCondition {
    const search = skyConditions.find((s) => s.code === identifier);
    if (!search) {
      return { code: identifier, description: "unknown" };
    }

    return search;
  }

  private selectField = (type: IDatasourceType) => {
    switch (type) {
      case "AIRCRAFTREPORTS":
        return "AircraftReport";
      case "AIRSIGMETS":
        return "AIRSIGMET";
      case "GAIRMETS":
        return "GAIRMET";
      case "METARS":
        return "METAR";
      case "TAFS":
        return "TAF";
      case "STATIONS":
        return "Station";
      default:
        return "METAR";
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private FormatOutput = (type: IDatasourceType, data: any[]) => {
    switch (type) {
      case "METARS": {
        return data.map((metar) => {
          // make sure sky_condition exist
          if (!metar?.sky_condition) {
            metar.sky_condition = [];
          } else if (!(metar?.sky_condition instanceof Array)) {
            metar.sky_condition = [metar?.sky_condition];
          }
          return metar;
        });
      }

      case "TAFS": {
        return data.map((taf) => {
          // make sure forecast exist
          if (!taf?.forecast) {
            taf.forecast = [];
          } else if (!(taf?.forecast instanceof Array)) {
            taf.forecast = [taf?.forecast];
          }

          // make sure sky_condition exist for each forecast
          for (let index = 0; index < taf.forecast.length; index++) {
            const item = taf.forecast[index];
            if (!item?.sky_condition) {
              item.sky_condition = [];
            } else if (!(item?.sky_condition instanceof Array)) {
              item.sky_condition = [item?.sky_condition];
            }
          }
          return taf;
        });
      }

      case "STATIONS": {
        return data.map((station) => {
          // combination of station type
          if (station?.site_type) {
            station.site_type = Object.keys(station.site_type);
          }
          return station;
        });
      }
    }
    return data;
  };

  URI = {
    AW: <T extends IOptions>(options: T): string => {
      return axios.getUri({
        url: Client.api.AW,
        params: { ...options, requestType: "retrieve", format: "xml" },
      });
    },
    AVT7: (AirportCode: string): string => {
      return axios.getUri({
        url: Client.api.AVT7,
        params: { airport4Code: AirportCode },
      });
    },
  };

  async AW<T extends IOptions>(
    options: T
  ): Promise<
    T extends IMetarOptions
      ? IMetar[]
      : T extends ITafOptions
      ? ITaf[]
      : T extends IAircraftReportsOptions
      ? IAIREP[]
      : T extends IAirSigmetOptions
      ? IAirSigmet[]
      : T extends IGAirmetOptions
      ? IGAirMet[]
      : T extends IStationOptions
      ? IStation[]
      : never
  > {
    const res = await axios.get(Client.api.AW, {
      params: { ...options, requestType: "retrieve", format: "xml" },
    });

    if (this.options?.debug) {
      console.log("API Response\n\n", res.data, "\n\n\n");
    }

    // parse xml
    const parsedData = parse(res.data, {
      ignoreAttributes: false,
      attributeNamePrefix: "",
    });

    const finalData =
      parsedData?.response?.data?.[this.selectField(options.datasource)];

    if (this.options?.debug) {
      console.log("Parsed Data\n\n", finalData, "\n\n\n");
    }

    // final output
    if (!finalData) {
      return [] as never;
    }

    const output = finalData instanceof Array ? finalData : [finalData];
    return this.FormatOutput(options.datasource, output) as never;
  }

  AVT7 = async (AirportCode: string): Promise<IAVT7Metar> => {
    const res = await axios.get<IAVT7Metar>(Client.api.AVT7, {
      params: {
        airport4Code: AirportCode,
      },
    });
    return res.data;
  };
}
