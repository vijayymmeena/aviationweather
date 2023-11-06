export interface MetarParams {
  ids: string;
  format?: "raw" | "json" | "geojson" | "xml" | "html";
  taf?: boolean;
  hours?: number;
  date?: string;
}
