import axios, { AxiosResponse } from "axios";
import { TafParams } from "./types/params/taf.js";
import { TafResponse } from "./types/response/taf.js";
import { MetarResponse } from "./types/response/metar.js";
import { MetarParams } from "./types/params/metar.js";

export const api = axios.create({
  baseURL: "https://aviationweather.gov/cgi-bin/data",
});

export function getMetar(
  params: MetarParams,
): Promise<AxiosResponse<MetarResponse[]>> {
  return api.get<MetarResponse[]>("/metar.php", {
    params,
  });
}

export function getTaf(
  params: TafParams,
): Promise<AxiosResponse<TafResponse[]>> {
  return api.get<TafResponse[]>("/metar.php", {
    params,
  });
}
