export interface IAIREP {
  /**
   * Time (ISO8601 date/time format) when the report was received
   */
  receipt_time: string;

  /**
   * Time (ISO8601 date/time) when the weather/condition was experienced
   */
  observation_time: string;

  /**
   * Quality control flags (see below) that indicate any assumption(s)
   */
  quality_control_flags: string;

  /**
   * Reference to the aircraft. Aircraft type, flight number, or other aircraft information
   */
  aircraft_ref: string;

  /**
   * Latitude (decimal degrees)
   */
  latitude: number;

  /**
   * Longitude (decimal degrees)
   */
  longitude: number;

  /**
   * altitude in ft MSL (mean sea-level)
   */
  altitude_ft_msl: number;

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
   * Visibility (statute mi)
   */
  visibility_statute_mi?: number;

  /**
   * Weather
   */
  wx_string?: string;

  /**
   * Temperature (C)
   */
  temp_c?: string;

  /**
   * Wind direction-the direction from where the wind is blowing (degree)
   */
  wind_dir_degrees?: number;

  /**
   * Wind speed (kt)
   */
  wind_speed_kt?: number;

  /**
   * Vertical gust (m/s)
   */
  vert_gust_kt?: number;

  /**
   * PIREP or AIREP
   */
  pirep_type?: string;

  /**
   * Raw PIREP in text
   */
  raw_text?: string;
}
