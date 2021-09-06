export interface IStationOptions {
  datasource: "STATIONS";

  /**
   * station id using the four-letter specification
   */
  stationString: string;

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
   *
   * Indicate the fields of interest by a list of space or comma (,)
   * delimited field names (as indicated in the Station Field Description Table).
   *
   * If no fields are indicated, the default condition is assumed and
   * all available fields in the Station Field Description are returned.
   */
  fields?: string;
}
