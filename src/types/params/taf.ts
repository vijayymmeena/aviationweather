export interface TafParams {
  // biome-ignore lint/suspicious/noExplicitAny: ignore
  [key: string]: any;
  ids: string;
  format?: "raw" | "json" | "geojson" | "xml" | "html";
  taf?: boolean;
  hours?: number;
  date?: string;
}
