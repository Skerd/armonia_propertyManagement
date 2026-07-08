import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {EDIFICE_ENERGY_CLASS_VALUES} from "./edifice.constants";

export const EdificeSchemaDef = {
    name:                         { type: "string",        required: true  },
    project:                      { type: "objectId",      required: true  },
    mainImage:                    { type: "mediaId",       required: true  },
    imageGallery:                 { type: "mediaIdArray",  required: false },
    videoGallery:                 { type: "mediaIdArray",  required: false },
    mediaFiles:                   { type: "mediaIdArray",  required: false },
    marketingBooklet:             { type: "mediaId",       required: false },
    address:                      {
        type: "embedded",
        required: true,
        jsonPreprocess: true,
        items: {
            street:     { type: "string",   required: true  },
            postalCode: { type: "string",   required: true  },
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
    commercialFacilities:         { type: "stringArray",   required: false },
    neighborhoodFacilities:       { type: "stringArray",   required: false },
    constructors:                 { type: "objectIdArray", required: false },
    propertyTypes:                { type: "objectIdArray", required: false },
    constructionStartDate:        { type: "date",          required: false },
    expectedCompletionDate:       { type: "date",          required: false },
    actualCompletionDate:         { type: "date",          required: false },
    buildingPermitNumber:         { type: "string",        required: false },
    energyClass:                  { type: "enum",          required: false, options: EDIFICE_ENERGY_CLASS_VALUES },
} as const;

export type CreateEdificeFormType = InferCreateForm<typeof EdificeSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };

export type EditEdificeFormType = InferEditForm<typeof EdificeSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
