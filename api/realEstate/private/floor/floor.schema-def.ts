import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (name). */
export const FLOOR_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description). */
export const FLOOR_LONG_TEXT_MAX = 5000;
/** Each shared space label. */
export const FLOOR_SHARED_SPACE_ITEM_MAX = 128;
/** Max items in the shared spaces list. */
export const FLOOR_SHARED_SPACE_MAX_ITEMS = 30;

export const FloorSchemaDef = {
    name:             { type: "string",        required: true,  min: 1, max: FLOOR_SHORT_TEXT_MAX },
    edifice:          { type: "objectId",      required: true  },
    levelNumber:      { type: "number",        required: true  },
    totalUnits:       { type: "number",        required: true,  min: 0 },
    area:             { type: "number",        required: true,  min: 0 },
    isAccessible:     { type: "boolean",       required: false },
    hasEmergencyExit: { type: "boolean",       required: false },
    description:      { type: "string",        required: false, max: FLOOR_LONG_TEXT_MAX },
    sharedSpaces:     {
        type: "stringArray",
        required: false,
        maxItems: FLOOR_SHARED_SPACE_MAX_ITEMS,
        itemMin: 1,
        itemMax: FLOOR_SHARED_SPACE_ITEM_MAX,
    },
    mainImage:        { type: "mediaId",      required: true  },
    imageGallery:     { type: "mediaIdArray", required: false },
    videoGallery:     { type: "mediaIdArray", required: false },
    mediaFiles:       { type: "mediaIdArray", required: false },
    marketingBooklet: { type: "mediaId",      required: false },
} as const;

export type CreateFloorFormType = InferCreateForm<typeof FloorSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
export type EditFloorFormType = InferEditForm<typeof FloorSchemaDef> & { polygonCoordinates?: {x: number; y: number}[]; };
