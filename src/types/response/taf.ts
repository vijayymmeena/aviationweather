export interface TafResponse {
  tafId: number;
  icaoId: string;
  dbPopTime: string;
  bulletinTime: string;
  issueTime: string;
  validTimeFrom: number;
  validTimeTo: number;
  rawTAF: string;
  mostRecent: number;
  remarks: string;
  lat: number;
  lon: number;
  elev: number;
  prior: number;
  name: string;
  fcsts: Fcst[];
}

export interface Fcst {
  timeGroup: number;
  timeFrom: number;
  timeTo: number;
  timeBec?: number;
  fcstChange?: string;
  probability?: number;
  wdir: number;
  wspd: number;
  wgst?: number;
  wshearHgt?: number;
  wshearDir?: number;
  wshearSpd?: number;
  visib: string;
  altim?: number;
  vertVis?: number;
  wxString?: string;
  notDecoded?: number;
  clouds: Cloud[];
  icgTurb?: number[];
  temp?: number[];
}

export interface Cloud {
  cover: string;
  base: number;
  type?: number;
}
