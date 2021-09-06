export interface IStation {
  /**
   * The 4-letter station specifier
   */
  station_id: string;

  /**
   * Four-letter WMO Id for the station, please refer to [global WMO country information](http://weather.unisys.com/info/country_info.html), for WMO codes
   */
  wmo_id: string;

  /**
   * The latitude in decimal degrees
   */
  latitude: number;

  /**
   * The longitude in decimal degrees
   */
  longitude: number;

  /**
   * The elevation of the station (above mean sea-level) (meters MSL)
   */
  elevation_m: number;

  /**
   * The "common" name/human-readable name of the station
   */
  site: string;

  /**
   * The two-letter abbreviation for the U.S. state or Canadian province
   */
  state: string;

  /**
   * The two-letter country abbreviation
   */
  country: string;

  /**
   * The station type,
   * which can be a combination of the following: METAR | RAWINSONDE | TAF | NEXRAD | wind_profiler | WFO_office | SYNOPS
   */
  site_type: ISiteTypes[];
}

export type ISiteTypes =
  | "TAF"
  | "METAR"
  | "RAWINSONDE"
  | "NEXRAD"
  | "wind_profiler"
  | "WFO_office"
  | "SYNOPS";
