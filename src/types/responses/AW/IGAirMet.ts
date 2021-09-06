export interface IGAirMet {
  /**
   * The time the GAIRMET was received
   */
  receiptTime: string;

  /**
   * The time when the report was issued
   */
  issueTime: string;

  /**
   * The time when the report expires
   */
  expireTime: string;

  /**
   * The product code. Must be one of: SIERRA | TANGO | ZULU
   */
  product: "SIERRA" | "TANGO" | "ZULU";

  /**
   * Tag identifying airmet sector
   */
  tag: string;

  /**
   * T+ hour forecast is valid
   */
  forecastHour: number;

  /**
   * Time at which the report is valid
   */
  validTime: string;

  /**
   * The hazard type. Hazard types can be one of the following: IFR | MT_OBSC | TURB-HI | TURB-LO | ICE | FZLVL | M_FZLVL | SFC_WND | LLWS
   */
  hazard: string;

  /**
   * The type of geometry associated with the report: AREA | LINE
   */
  geometryType: string;

  /**
   * Frequency of occurrence
   */
  frequency: string;

  /**
   * Severity of condition. NULL or one of: LGT | MOD | SVR
   */
  severity: string;

  /**
   * General description of why advisory was issue
   */
  due_to: string;

  /**
   * Status of the report, such as normal, ammendment, etc
   */
  status: string;

  /**
   * Height of top of feature
   */
  "altitude:max_ft_msl": number;

  /**
   * Height of bottom of feature, 0 to indicate SFC, or -1 to indicate fzl_altitude is the bottom of the feature
   */
  "altitude:min_ft_msl": number;

  /**
   * Maximum altitude of the freezing level
   */
  "fzl_altitude:max_ft_msl": number;

  /**
   * Minimum altitude of the freezing level
   */
  "fzl_altitude:min_ft_msl": number;

  /**
   * Level of occurrence
   */
  level: number;

  /**
   * Number of lon/lat pairs delineating the feature
   */
  num_points: number;

  /**
   * An array of points defining the line or polygon
   * Longitude of the delineating point
   * Latitude of the delineating point
   */
  area: { longitude: number; latitude: number }[];
}
