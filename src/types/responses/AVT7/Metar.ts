export interface IAVT7Metar {
  airportArrivalStandardList: AirportArrivalStandardList;
  airportDepartureStandardList: AirportDepartureStandardList;
  metarContentList: ContentList;
  tafContentList: ContentList;
  Temperature: AirPressure[];
  DewPoint: AirPressure[];
  Visibility: AirPressure[];
  WindSpeed: AirPressure[];
  AirPressure: AirPressure[];
}

export interface AirPressure {
  content: null | string;
  value: number;
  HourTag: null | string;
}

export interface AirportArrivalStandardList {
  page: string;
  total: number;
  rows: AirportArrivalStandardListRow[];
}

export interface AirportArrivalStandardListRow {
  RunWay: string;
  ComeNearType: string;
  ComeNearNormal: ComeNearNormal;
  CKind: string;
}

export enum ComeNearNormal {
  DaDh = "DA(DH)",
  DaH = "DA(H)",
  MDAH = "MDA(H)",
  RvrVis = "RVR/VIS",
  Vis = "VIS",
}

export interface AirportDepartureStandardList {
  page: string;
  total: number;
  rows: AirportDepartureStandardListRow[];
}

export interface AirportDepartureStandardListRow {
  RunWay: string;
  AcraftType: string;
  HirlRcls: string;
  Hirl: string;
  HirlRclsStop: string;
  Lights: string;
}

export interface ContentList {
  page: string;
  total: number;
  rows: AirPressure[];
}
