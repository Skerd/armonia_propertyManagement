import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {EDIFICE_ENERGY_CLASS_VALUES} from "./edifice.constants";

/** Short single-line labels (name). */
export const EDIFICE_SHORT_TEXT_MAX = 128;
/** Street address line. */
export const EDIFICE_STREET_MAX = 256;
/** Postal / ZIP code. */
export const EDIFICE_POSTAL_CODE_MAX = 32;
/** Building permit reference number. */
export const EDIFICE_PERMIT_NUMBER_MAX = 64;
/** Each commercial / neighborhood facility label. */
export const EDIFICE_FACILITY_ITEM_MAX = 128;
/** Max items per facility list. */
export const EDIFICE_FACILITY_MAX_ITEMS = 30;

export const EdificeSchemaDef = {
    name:                         { type: "string",        required: true,  min: 1, max: EDIFICE_SHORT_TEXT_MAX },
    project:                      { type: "objectId",      required: true  },
    mainImage:                    { type: "mediaId",       required: true,  publicAccess: true },
    imageGallery:                 { type: "mediaIdArray",  required: false, publicAccess: true },
    videoGallery:                 { type: "mediaIdArray",  required: false, publicAccess: true },
    mediaFiles:                   { type: "mediaIdArray",  required: false },
    marketingBooklet:             { type: "mediaId",       required: false, publicAccess: true },
    address:                      {
        type: "embedded",
        required: true,
        jsonPreprocess: true,
        items: {
            street:     { type: "string",   required: true,  min: 1, max: EDIFICE_STREET_MAX },
            postalCode: { type: "string",   required: true,  min: 1, max: EDIFICE_POSTAL_CODE_MAX },
            country:    { type: "objectId", required: true  },
            state:      { type: "objectId", required: false },
            city:       { type: "objectId", required: true  },
            latitude:   { type: "number",   required: true,  min: -90,  max: 90  },
            longitude:  { type: "number",   required: true,  min: -180, max: 180 },
        }
    },
    investmentValue:              { type: "number",        required: true,  min: 0 },
    investmentCurrency:           { type: "objectId",      required: true  },
    pricePerMeterSquared:         { type: "number",        required: false, min: 0 },
    verandaPricePerMeterSquared:   { type: "number",        required: false, min: 0 },
    saleCurrency:                 { type: "objectId",      required: false },
    distanceFromCityCenter:       { type: "number",        required: false, min: 0 },
    totalArea:                    { type: "number",        required: false, min: 0 },
    greenArea:                    { type: "number",        required: false, min: 0 },
    numberOfFloors:               { type: "number",        required: false, min: 0 },
    numberOfParkingSpaces:        { type: "number",        required: false, min: 0 },
    numberOfGarages:              { type: "number",        required: false, min: 0 },
    numberOfFloorsAboveGround:    { type: "number",        required: false, min: 0 },
    numberOfFloorsUnderGround:    { type: "number",        required: false, min: 0 },
    commercialFacilities:         {
        type: "stringArray",
        required: false,
        maxItems: EDIFICE_FACILITY_MAX_ITEMS,
        itemMin: 1,
        itemMax: EDIFICE_FACILITY_ITEM_MAX,
    },
    neighborhoodFacilities:       {
        type: "stringArray",
        required: false,
        maxItems: EDIFICE_FACILITY_MAX_ITEMS,
        itemMin: 1,
        itemMax: EDIFICE_FACILITY_ITEM_MAX,
    },
    constructors:                 { type: "objectIdArray", required: false },
    propertyTypes:                { type: "objectIdArray", required: false },
    constructionStartDate:        { type: "date",          required: false },
    expectedCompletionDate:       { type: "date",          required: false },
    actualCompletionDate:         { type: "date",          required: false },
    buildingPermitNumber:         { type: "string",        required: false, max: EDIFICE_PERMIT_NUMBER_MAX },
    energyClass:                  { type: "enum",          required: false, options: EDIFICE_ENERGY_CLASS_VALUES },
} as const;

export type CreateEdificeFormType = InferCreateForm<typeof EdificeSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };

export type EditEdificeFormType = InferEditForm<typeof EdificeSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
