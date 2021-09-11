export interface IGAirMet {
  /**
   * The time the GAIRMET was received
   */
  receipt_time: string;

  /**
   * The time when the report was issued
   */
  issue_time: string;

  /**
   * The time when the report expires
   */
  expire_time: string;

  /**
   * The product code. Must be one of: SIERRA | TANGO | ZULU
   */
  product: "SIERRA" | "TANGO" | "ZULU";

  /**
   * Roughly the number of hours between the issue time and the valid time
   */
  roughly_the_number_of_hours_between_the_issue_time_and_the_valid_time: number;

  /**
   * Tag identifying airmet sector
   */
  tag: string;

  /**
   * T+ hour forecast is valid
   */
  forecast_hour?: number;

  /**
   * Time at which the report is valid
   */
  valid_time: string;

  /**
   * The hazard type and severity.
   * Hazard types can be one of the following: MTN OBSCN | IFR | TURB | ICE | CONVECTIVE | ASH
   * The severity is one of the following: NONE | LT-MOD | MOD | MOD-SEV | SEV
   */
  hazard: {
    type: "MTN OBSCN" | "IFR" | "TURB" | "ICE" | "CONVECTIVE" | "ASH";
    severity?: "NONE" | "LT-MOD" | "MOD" | "MOD-SEV";
  };

  /**
   * The type of geometry associated with the report: AREA | LINE
   */
  geometry_type: "AREA" | "LINE";

  /**
   * Frequency of occurrence
   */
  frequency?: string;

  /**
   * General description of why advisory was issue
   */
  due_to?: string;

  /**
   * Status of the report, such as normal, ammendment, etc
   */
  status?: string;

  altitude?: {
    /**
     * Minimum altitude, in feet (MSL).
     */
    min_ft_msl: number;

    /**
     * Maximum altitude, in feet (MSL).
     */
    max_ft_msl: number;
  };

  fzl_altitude?: {
    /**
     * Minimum altitude, in feet (MSL).
     */
    min_ft_msl: number;

    /**
     * Maximum altitude, in feet (MSL).
     */
    max_ft_msl: number;
  };

  /**
   * An array of points defining the polygon
   */
  area: {
    num_points: number;
    point: IPoint[];
  };

  /**
   * wx_details
   */
  wx_details?: string;
}

interface IPoint {
  /**
   * Latitude of a point comprising the AIRSIGMET region
   */
  latitude: number;

  /**
   * Longitude of a point comprising the AIRSIGMET region.
   */
  longitude: number;
}
