export interface ITafOptions {
  datasource: "TAFS";

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
  startTime?: number;

  /**
   * start and end times in seconds since January 1, 1970
   */
  endTime?: number;

  /**
   * timeType = issue or valid (default)
   */
  timeType?: "issue" | "valid";

  /**
   * true - get the single most recent TAF, only one result is returned
   * false - don't get the most recent TAF, equivalent to omitting mostRecent parameter
   */
  mostRecent?: boolean;

  /**
   * constraint - request the most recent for each TAF station in the fastest fashion. Not appropriate for historical data retrieval
   * postfilter - post filter results after applying all other constraints
   * true - same as 'postfilter' employ the postfilter method described above
   * false - don't get the most recent for each TAF station, equivalent to omitting this parameter
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
   *
   * NOTE: Flight path results are sorted by distance along the flight path, from origin to destination.
   * The flight path constraint cannot accommodate the following situations:
   * flight paths that cross the poles
   * flight paths that cross the International Date Line.
   */
  flightPath?: string;

  /**
   * 0 < any value <90
   * The degree distance is the distance (based on longitude and latitude) between stations.
   *  The larger the value of minDegreeDistance, the less dense the results.
   * Duplicate stations are filtered and the most recent of duplicate stations is reported.
   */
  minDegreeDistance?: number;
}
