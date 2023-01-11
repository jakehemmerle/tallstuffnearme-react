import { ControlPosition } from "react-map-gl";

// below are the interfaces for the GET /example endpoint response
export interface ExampleResponse {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  OASNumber: number;
  Verified: string;
  Country: string;
  State: string;
  City: string;
  Latitude: number;
  Longitude: number;
  ObjectType: ObjectType;
  AGL: number;
  AMSL: number;
  LT: string;
  H: string;
  AccV: string;
  MarInd: string;
  FAAStudyNumber: string;
  Action: string;
  JDate: string;
  distanceFromLocation: number;
}

export interface ControlDropDown {
  value: ControlPosition;
  label: string;
}

export interface ObjectTypeEvent {
  value: ObjectType;
  checked: boolean;
}

export enum ObjectType {
  RIG = "RIG",
  STACK = "STACK",
  BLDG = "BLDG",
  TOWER = "TOWER",
  POLE = "POLE",
  ELEC_SYS = "ELEC_SYS",
  TL_TWR = "TL_TWR",
  TANK = "TANK",
  BRIDGE = "BRIDGE",
  SIGN = "SIGN",
  REFINERY = "REFINERY",
  FENCE = "FENCE",
  PLANT = "PLANT",
  GEN_UTIL = "GEN_UTIL",
  ELEVATOR = "ELEVATOR",
  ANTENNA = "ANTENNA",
  NAVAID = "NAVAID",
  CTRL_TWR = "CTRL_TWR",
  SILO = "SILO",
  UTILITY_POLE = "UTILITY_POLE",
  CRANE = "CRANE",
  BLDGTWR = "BLDGTWR",
  VERTICAL_STRUCTURE = "VERTICAL_STRUCTURE",
  AG_EQUIP = "AG_EQUIP",
  CATENARY = "CATENARY",
  WINDSOCK = "WINDSOCK",
  DOME = "DOME",
  SOLAR_PANELS = "SOLAR_PANELS",
  MET = "MET",
  AMUSEMENT_PARK = "AMUSEMENT_PARK",
  MONUMENT = "MONUMENT",
  STADIUM = "STADIUM",
  COOL_TWR = "COOL_TWR",
  DAM = "DAM",
  WINDMILL = "WINDMILL",
  LANDFILL = "LANDFILL",
  POWER_PLANT = "POWER_PLANT",
  TRAMWAY = "TRAMWAY",
  BALLOON = "BALLOON",
  SPIRE = "SPIRE",
  WALL = "WALL",
  HEAT_COOL_SYSTEM = "HEAT_COOL_SYSTEM",
  NATURAL_GAS_SYSTEM = "NATURAL_GAS_SYSTEM",
  LGTHOUSE = "LGTHOUSE",
  PIPELINE_PIPE = "PIPELINE_PIPE",
  HANGAR = "HANGAR",
  ARCH = "ARCH",
  GRAIN_ELEVATOR = "GRAIN_ELEVATOR",
  GATE = "GATE",
  WIND_INDICATOR = "WIND_INDICATOR",
  UNDEFINED = "UNDEFINED",
}

export interface RequestBody {
  latitude: number;
  longitude: number;
  radius: number;
}
