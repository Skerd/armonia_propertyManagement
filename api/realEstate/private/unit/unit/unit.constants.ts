export const UNIT_ORIENTATION_VALUES = ["N", "S", "E", "W", "NE", "NW", "SE", "SW"] as const;
export type UnitOrientation = (typeof UNIT_ORIENTATION_VALUES)[number];

export const UNIT_CONSTRUCTION_STATUS_VALUES = ["planned", "under_construction", "ready", "delivered"] as const;
export type UnitConstructionStatus = (typeof UNIT_CONSTRUCTION_STATUS_VALUES)[number];

export enum UnitStatus {
    AVAILABLE   = "available_unit",
    UNAVAILABLE = "unavailable_unit",
    RESERVED    = "reserved_unit",
    SOLD        = "sold_unit",
    RENTED      = "rented_unit",
}