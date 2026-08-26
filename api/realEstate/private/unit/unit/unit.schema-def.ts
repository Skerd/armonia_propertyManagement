import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";
import {UNIT_CONSTRUCTION_STATUS_VALUES, UNIT_ORIENTATION_VALUES} from "./unit.constants";

/** Short single-line labels (name). */
export const UNIT_SHORT_TEXT_MAX = 128;
/** Unit number / code. */
export const UNIT_NUMBER_MAX = 64;
/** Long text / textarea fields (description). */
export const UNIT_LONG_TEXT_MAX = 5000;

export const UnitSchemaDef = {
    floor:                            { type: "objectId",      required: true  },
    unitType:                         { type: "objectId",      required: true  },
    unitNumber:                       { type: "string",        required: true,  min: 1, max: UNIT_NUMBER_MAX },
    name:                             { type: "string",        required: true,  min: 1, max: UNIT_SHORT_TEXT_MAX },
    area:                             { type: "number",        required: true, min: 0 },
    sharedArea:                       { type: "number",        required: true, min: 0 },
    netArea:                          { type: "number",        required: true, min: 0 },
    verandaArea:                      { type: "number",        required: false, min: 0 },
    price:                            { type: "number",        required: true, min: 0 },
    priceCurrency:                    { type: "objectId",      required: true  },
    numberOfRooms:                    { type: "number",        required: true, min: 0 },
    numberOfBathrooms:                { type: "number",        required: true, min: 0 },
    description:                      { type: "string",        required: false, max: UNIT_LONG_TEXT_MAX },
    mainImage:                        { type: "mediaId",       required: false, publicAccess: true },
    imageGallery:                     { type: "mediaIdArray",  required: false, publicAccess: true },
    videoGallery:                     { type: "mediaIdArray",  required: false, publicAccess: true },
    mediaFiles:                       { type: "mediaIdArray",  required: false },
    marketingBooklet:                 { type: "mediaId",       required: false, publicAccess: true },
    connectedUnits:                   { type: "objectIdArray", required: false },
    hasBalcony:                       { type: "boolean",       required: false },
    hasTerrace:                       { type: "boolean",       required: false },
    hasSeaView:                       { type: "boolean",       required: false },
    hasCityView:                      { type: "boolean",       required: false },
    hasLakeView:                      { type: "boolean",       required: false },
    hasElevator:                      { type: "boolean",       required: false },
    saleCommissionRatePercent:        { type: "number",        required: false, min: 0, max: 100 },
    reservationCommissionRatePercent: { type: "number",        required: false, min: 0, max: 100 },
    orientation:                      { type: "enum",          required: false, options: UNIT_ORIENTATION_VALUES},
    constructionStatus:               { type: "enum",          required: false, options: UNIT_CONSTRUCTION_STATUS_VALUES },
    featuredOnHomepage:               { type: "boolean",       required: false },
    featuredSortOrder:                { type: "number",        required: false, min: 0 },
} as const;

export type CreateUnitFormType = InferCreateForm<typeof UnitSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
export type EditUnitFormType = InferEditForm<typeof UnitSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
