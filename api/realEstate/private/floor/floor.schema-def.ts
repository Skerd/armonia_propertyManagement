import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const FloorSchemaDef = {
    name:             { type: "string",        required: true  },
    edifice:          { type: "objectId",      required: true  },
    levelNumber:      { type: "number",        required: true  },
    totalUnits:       { type: "number",        required: true,  min: 0 },
    area:             { type: "number",        required: true,  min: 0 },
    isAccessible:     { type: "boolean",       required: false },
    hasEmergencyExit: { type: "boolean",       required: false },
    description:      { type: "string",        required: false },
    sharedSpaces:     { type: "stringArray",   required: false },
    mainImage:        { type: "mediaId",      required: true  },
    imageGallery:     { type: "mediaIdArray", required: false },
    videoGallery:     { type: "mediaIdArray", required: false },
    mediaFiles:       { type: "mediaIdArray", required: false },
    marketingBooklet: { type: "mediaId",      required: false },
} as const;

export type CreateFloorFormType = InferCreateForm<typeof FloorSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
export type EditFloorFormType = InferEditForm<typeof FloorSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
