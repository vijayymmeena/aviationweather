export interface IAirSigmetOptions {
  datasource: "AIRSIGMETS";

  /**
   * any positive integer or floating point value
   * n = number of hours before current time
   * query based on METAR obsTime
   */
  hoursBeforeNow?: number;

  /**
   * start and end times in seconds since January 1, 1970
   */
  startTime?: Date | string | number;

  /**
   * start and end times in seconds since January 1, 1970
   */
  endTime?: Date | string | number;

  /**
   * true - get the single most recent aircraft report, only one result is returned
   * false - don't get the most recent aircraft report, equivalent to omitting mostRecent parameter
   * query based on aircraft report obsTime
   *
   * NOTE: The mostRecent constraint is applied after all other constraints have been applied to yield only one aircraft report.
   * This single aircraft report corresponds to the most recent in the result set defined by the other constraints.
   * The mostRecent constraint MUST be constrained by a time range of either hoursBeforeNow or startTime/endTime.
   * Only one aircraft report is returned.
   */
  mostRecent?: boolean;

  /**
   * Minimum latititude in decimal degrees
   * -90<= lat <=90
   *
   * Note:
   * The LonLatRect constraint can accommodate situations where the bounding box crosses the International Date Line
   * The LonLatRect constraint does not support bounding boxes that cross the poles.
   */
  minLat?: number;

  /**
   * Maximum latititude in decimal degrees
   * -90<= lat <=90
   *
   * Note:
   * The LonLatRect constraint can accommodate situations where the bounding box crosses the International Date Line
   * The LonLatRect constraint does not support bounding boxes that cross the poles.
   */
  maxLat?: number;

  /**
   * Minimum longitude in decimal degrees
   * -180<= lon <=180
   *
   * Note:
   * The LonLatRect constraint can accommodate situations where the bounding box crosses the International Date Line
   * The LonLatRect constraint does not support bounding boxes that cross the poles.
   */
  minLon?: number;

  /**
   * Maximum longitude in decimal degrees
   * -180<= lon <=180
   *
   * Note:
   * The LonLatRect constraint can accommodate situations where the bounding box crosses the International Date Line
   * The LonLatRect constraint does not support bounding boxes that cross the poles.
   */
  maxLon?: number;

  /**
   * maximum distance in statute miles
   * two or more way points
   * Waypoints may take the form of (lon,lat) or station Ids or a mixture of (lon,lat) and station Id
   * lon, lat are delimited by a comma (,)
   * maximum distance MUST precede the way points
   * maximium distance and way points are delimited by a semicolon( ;)
   * the ordering of waypoints is significant: always start with origin, end with destination
   * time range:
   * use start, end times
   * use hoursBeforeNow
   * default (hoursBeforeNow=1)
   */
  flightPath?: string;

  /**
   * any integer value (in feet) both a min and max altitude must be indicatedmin and max can be in any order
   */
  minAltitudeFt?: number;

  /**
   * any integer value (in feet) both a min and max altitude must be indicatedmin and max can be in any order
   */
  maxAltitudeFt?: number;
}
