export interface ITaf {
  /**
   * The raw TAF in text
   */
  raw_text: string;

  /**
   * Station identifier; Always a four character alphanumeric ( A-Z, 0-9 )
   */
  station_id: string;

  /**
   * Issue time (date and time the forecast was prepared) in ISO8601 date/time
   */
  issue_time: Date;

  /**
   * Bulletin time (obtained from the WMO Header of the data) in ISO8601 date/time
   */
  bulletin_time: Date;

  /**
   * The start time of when the report is valid (in ISO8601 date/time).
   */
  valid_time_from: Date;

  /**
   * The end time for when the report is valid (in ISO8601 date/time).
   */
  valid_time_to: Date;

  /**
   * Any remarks
   */
  remarks?: string;

  /**
   * Latitude (decimal) degrees
   */
  latitude: number;

  /**
   * Longitude (decimal) degrees
   */
  longitude: number;

  /**
   * Elevation (m)
   */
  elevation_m: number;

  /**
   * An array of data for a specific forecast period
   */
  forecast: Forecast[];
}

export interface Forecast {
  /**
   * The start of the forecast time (ISO8601 date/time)
   */
  fcst_time_from: Date;

  /**
   * The end time of the forecast (ISO8601 date/time)
   */
  fcst_time_to: Date;

  /**
   * Wind direction-the direction from where the wind is blowing (degree)
   */
  wind_dir_degrees?: number;

  /**
   * Wind speed (kt)
   */
  wind_speed_kt?: number;

  /**
   * Wind gust (kt)
   */
  wind_gust_kt?: number;

  /**
   * Wind shear height above ground level (ft AGL)
   */
  wind_shear_hgt_ft_agl?: number;

  /**
   * Wind shear direction (degree)
   */
  wind_shear_dir_degrees?: number;

  /**
   * Wind shear speed (kt)
   */
  wind_shear_speed_kt?: number;

  /**
   * Visibility (horizontal)
   */
  visibility_statute_mi?: number;

  /**
   * Altimeter (inches of mercury)
   */
  altim_in_hg?: number;

  /**
   * Vertical visibility (ft)
   */
  vert_vis_ft?: number;

  /**
   * Weather
   */
  wx_string?: string;

  /**
   * Indicates what isn't decoded
   */
  not_decoded?: string;

  /**
   * Sky condition
   */
  sky_condition?: {
    /**
     * Sky coverage
     */
    sky_cover?: "NSC" | "SKC" | "CLR" | "SKT" | "BKN" | "FEW" | "OVC" | "OVCX";

    /**
     * Cloud base (ft AGL)
     */
    cloud_base_ft_agl?: number;

    /**
     * Cloud type
     */
    cloud_type?: "CB" | "TCU" | "CU";
  };

  /**
   * Forecast change indicator: TEMPO|BECMG|FM|PROB
   */
  change_indicator?: "TEMPO" | "BECMG" | "FM" | "PROB";

  /**
   * Percent probability
   */
  probability?: number;

  /**
   * Time becoming (ISO8601 date/time)
   */
  time_becoming?: string;

  /**
   * Turbulence Condition
   */
  turbulence_condition?: {
    /**
     * Turbulence intensity values: [0-9]
     * Please refer to [WMO No. 306 Manual on Codes](http://www.wmo.ch/web/www/DPS/NewCodesTables/WMO306vol-I-1PartA.pdf) for more details
     */
    turbulence_intensity?: string;

    /**
     * Minimum altitude for turbulence (ft AGL)
     */
    turbulence_min_alt_ft_agl?: number;

    /**
     * Maximum  altitude for turbulence (ft AGL)
     */
    turbulence_max_alt_ft_agl?: number;
  };

  /**
   * Icing Condition
   */
  icing_condition?: {
    /**
     * Icing intensity values: [0-9]
     * Please refer to [WMO No. 306 Manual on Codes](http://www.wmo.ch/web/www/DPS/NewCodesTables/WMO306vol-I-1PartA.pdf) for more details
     */
    icing_intensity?: string;

    /**
     * Minimum altitude for icing (ft AGL)
     */
    icing_min_alt_ft_agl?: number;

    /**
     * Maximum  altitude for icing (ft AGL)
     */
    icing_max_alt_ft_agl?: number;
  };

  /**
   * An array of temperature data
   */
  temperature?: Temperature[];
}

interface Temperature {
  /**
   * Temperature valid time (ISO8601 date/time)
   */
  valid_time?: string;

  /**
   * Surface temperature
   */
  sfc_temp_c?: number;

  /**
   * Max temp
   */
  max_temp_c?: number;

  /**
   * Min temp
   */
  min_temp_c?: number;
}
