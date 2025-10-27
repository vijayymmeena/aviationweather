import axios, { type AxiosResponse } from "axios";
import type {
  MetarParams,
  MetarResponse,
  TafParams,
  TafResponse,
} from "./types/index.js";

export const api = axios.create({
  baseURL: "https://aviationweather.gov/api/data",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getMetar<T = MetarResponse[]>(
  params: MetarParams
): Promise<AxiosResponse<T>> {
  return api.get<T>("/metar", {
    params,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTaf<T = TafResponse[]>(
  params: TafParams
): Promise<AxiosResponse<T>> {
  return api.get<T>("/taf", {
    params,
  });
}
