export interface IAirSigmet {
  /**
   * The raw AIRSIGMET
   */
  raw_text: string;

  /**
   * The start time of when the report is valid (in ISO8601 date/time format).
   */
  valid_time_from: string;

  /**
   * The end time for when the report is valid (in ISO8601 date/time format).
   */
  valid_time_to: string;

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

  /**
   * Movement direction of the AIRSIGMET condition.
   */
  movement_dir_degrees: number;

  /**
   * Speed in which the AIRSIGMET condition is moving
   */
  movement_speed_kt: number;

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
   * The type of report: OUTLOOK, AIRMET or SIGMET
   */
  airsigmet_type: "OUTLOOK" | "AIRMET" | "SIGMET";

  /**
   * An array of points defining the polygon
   */
  area: {
    num_points: number;
    point: IPoint[];
  };
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
