export interface IMetarOptions {
  datasource: "METARS";

  /**
   * station id using the four-letter specification
   */
  stationString: string;

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
   * true - get the single most recent METAR (only one value is returned) for the specified time range
   * false - don't get the most recent METAR, equivalent to omitting mostRecent parameter
   * query based on METAR obsTime
   *
   * NOTE: The mostRecent constraint is applied after all other constraints have been applied to yield only one aircraft report.
   * This single aircraft report corresponds to the most recent in the result set defined by the other constraints.
   * The mostRecent constraint MUST be constrained by a time range of either hoursBeforeNow or startTime/endTime.
   * Only one aircraft report is returned.
   */
  mostRecent?: boolean;

  /**
   * constraint - request the most recent for each METAR station in the fastest fashion. Not appropriate for historical data retrieval
   * postfilter - post filter results after applying all other constraints
   * true - same as 'postfilter' method
   * false - don't get the most recent for each METAR station, equivalent to omitting this parameter
   * query is based on METAR obsTime
   */
  mostRecentForEachStation?: boolean | "constraint" | "postfilter";

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
   * a radius (statute miles) around a point (longitude and latitude in decimal degrees)
   * -180<= lon <=180
   * -90<= lat <=90
   * 0< radius <=500
   * Radius and origin are separated by a semicolon(;)
   * Described area may not cross the international dateline or either pole
   * Please refer to: [latitude and longitude](http://whatis.techtarget.com/definition/0,,sid9_gci828937,00.html) for a refresher on these ranges.
   */
  radialDistance?: string;

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
   * 0 < any value <90
   * The degree distance is the distance (based on longitude and latitude) between stations.
   *  The larger the value of minDegreeDistance, the less dense the results.
   * Duplicate stations are filtered and the most recent of duplicate stations is reported.
   */
  minDegreeDistance?: number;

  /**
   * Constrain the results to contain only the fields of interest.
   * Indicate the fields of interest by a list of space or comma (,)
   * delimited field names (as indicated in the Metar Field Description Table).
   * If no fields are indicated, the default condition is assumed and all available fields in the Metar Field Description are returned
   */
  fields?: string;
}
