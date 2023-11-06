import axios, { AxiosResponse } from "axios";
import {
  MetarParams,
  MetarResponse,
  TafParams,
  TafResponse,
} from "./types/index.js";

export const api = axios.create({
  baseURL: "https://aviationweather.gov/cgi-bin/data",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMetar<T = MetarResponse[]>(
  params: MetarParams,
): Promise<AxiosResponse<T>> {
  return api.get<T>("/metar.php", {
    params,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTaf<T = TafResponse[]>(
  params: TafParams,
): Promise<AxiosResponse<T>> {
  return api.get<T>("/taf.php", {
    params,
  });
}
