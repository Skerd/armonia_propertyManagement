import type {InferCreateForm, InferEditForm} from "../../../../../../core/helpers/schemaDefBuilder";
import {UNIT_CONSTRUCTION_STATUS_VALUES, UNIT_ORIENTATION_VALUES} from "./unit.constants";

export const UnitSchemaDef = {
    floor:                            { type: "objectId",      required: true  },
    unitType:                         { type: "objectId",      required: true  },
    unitNumber:                       { type: "string",        required: true  },
    name:                             { type: "string",        required: true  },
    area:                             { type: "number",        required: true, min: 0 },
    sharedArea:                       { type: "number",        required: true, min: 0 },
    netArea:                          { type: "number",        required: true, min: 0 },
    verandaArea:                      { type: "number",        required: false, min: 0 },
    price:                            { type: "number",        required: true, min: 0 },
    priceCurrency:                    { type: "objectId",      required: true  },
    numberOfRooms:                    { type: "number",        required: true, min: 0 },
    numberOfBathrooms:                { type: "number",        required: true, min: 0 },
    description:                      { type: "string",        required: false },
    mainImage:                        { type: "mediaId",       required: false },
    imageGallery:                     { type: "mediaIdArray",  required: false },
    videoGallery:                     { type: "mediaIdArray",  required: false },
    mediaFiles:                       { type: "mediaIdArray",  required: false },
    marketingBooklet:                 { type: "mediaId",       required: false },
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
} as const;

export type CreateUnitFormType = InferCreateForm<typeof UnitSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
export type EditUnitFormType = InferEditForm<typeof UnitSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
