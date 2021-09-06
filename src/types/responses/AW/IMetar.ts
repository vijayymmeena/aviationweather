export interface IMetar {
  /**
   * The raw METAR
   */
  raw_text: string;

  /**
   * Station identifier; Always a four character alphanumeric( A-Z, 0-9)
   */
  station_id: string;

  /**
   * Time( in ISO8601 date/time format) this METAR was observed.
   */
  observation_time: Date;

  /**
   * The latitude (in decimal degrees )of the station that reported this METAR
   */
  latitude: number;

  /**
   * The longitude (in decimal degrees) of the station that reported this METAR
   */
  longitude: number;

  /**
   * Air temperature (C)
   */
  temp_c: number;

  /**
   * Dewpoint temperature (C)
   */
  dewpoint_c: number;

  /**
   * Direction from which the wind is blowing.
   * 0 degrees=variable wind direction (degree)
   */
  wind_dir_degrees: number;

  /**
   * Wind speed; 0 degree wdir and 0 wspd = calm winds (kts)
   */
  wind_speed_kt: number;

  /**
   * Wind gust (kts)
   */
  wind_gust_kt?: number;

  /**
   * Horizontal visibility (statute miles)
   */
  visibility_statute_mi: number;

  /**
   * Altimeter (inches of Hg)
   */
  altim_in_hg: number;

  /**
   * Sea-level pressure
   */
  sea_level_pressure_mb?: number;

  /**
   * Quality control flags (see below) provide useful information about the METAR station(s) that provide the data.
   */
  quality_control_flags?: { no_signal: string };

  /**
   * wx_string descriptions (https://www.aviationweather.gov/docs/metar/wxSymbols_anno2.pdf)
   */
  wx_string?: string;

  /**
   * Sky condition
   */
  sky_condition: {
    /**
     * Sky coverage
     */
    sky_cover: "NSC" | "SKC" | "CLR" | "SKT" | "BKN" | "FEW" | "OVC" | "OVCX";

    /**
     * Cloud base (ft AGL)
     */
    cloud_base_ft_agl?: number;

    /**
     * Cloud type
     */
    cloud_type?: "CB" | "TCU" | "CU";
  }[];

  /**
   * Flight category of this METAR. Values: VFR|MVFR|IFR|LIFR
   * See http://www.aviationweather.gov/metar/help?page=plot#fltcat
   * NOTE: cloud_base_ft_agl needs to be specified to output flight_category.
   */
  flight_category: "VFR" | "MVFR" | "IFR" | "LIFR";

  /**
   * Pressure change in the past 3 hours (mb)
   */
  three_hr_pressure_tendency_mb?: number;

  /**
   * Maximum air temperature from the past 6 hours (C)
   */
  maxT_c?: number;

  /**
   * Minimum air temperature from the past 6 hours (C)
   */
  minT_c?: number;

  /**
   * Maximum air temperature from the past 24 hours (C)
   */
  maxT24hr_c?: number;

  /**
   * Minimum air temperature from the past 24 hours (C)
   */
  minT24hr_c?: number;

  /**
   * Liquid precipitation since the last regular METAR (in)
   */
  precip_in?: number;

  /**
   * Liquid precipitation from the past 3 hours. 0.0005 in = trace precipitation (in)
   */
  pcp3hr_in?: number;

  /**
   * Liquid precipitation from the past 6 hours. 0.0005 in = trace precipitation (in)
   */
  pcp6hr_in?: number;

  /**
   * Liquid precipitation from the past 24 hours. 0.0005 in = trace precipitation (in)
   */
  pcp24hr_in?: number;

  /**
   * Snow depth on the ground (in)
   */
  snow_in?: number;

  /**
   * Vertical Visibility (ft)
   */
  vert_vis_ft?: number;

  /**
   * METAR or SPECI
   */
  metar_type: "METAR" | "SPECI";

  /**
   * The elevation of the station that reported this METAR (meters)
   */
  elevation_m: number;
}
