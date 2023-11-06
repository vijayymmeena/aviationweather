export interface MetarParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  ids: string;
  format?: "raw" | "json" | "geojson" | "xml" | "html";
  taf?: boolean;
  hours?: number;
  date?: string;
}
