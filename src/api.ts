import axios from "axios";
import { MetarResponse } from "./types/response/metar.js";
import { TafResponse } from "./types/response/taf.js";
import { TafParams } from "./types/params/taf.js";
import { MetarParams } from "./types/params/metar.js";

export const api = axios.create({
  baseURL: "https://aviationweather.gov/cgi-bin/data",
});

export function getMetar(params: MetarParams) {
  return api.get<MetarResponse[]>("/metar.php", {
    params,
  });
}

export function getTaf(params: TafParams) {
  return api.get<TafResponse[]>("/metar.php", {
    params,
  });
}
