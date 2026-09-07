import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const landParcelStatusValues = ["prospect", "under_dd", "dd_failed", "acquired", "disposed"] as const;
export type LandParcelStatusValue = typeof landParcelStatusValues[number];

export const landParcelConcludeDueDiligenceOutcomes = ["approved", "declined"] as const;
export type LandParcelConcludeDueDiligenceOutcome = typeof landParcelConcludeDueDiligenceOutcomes[number];

/** Short single-line labels (title, cadastral reference, zoning, due-diligence status). */
export const LAND_PARCEL_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description, notes). */
export const LAND_PARCEL_LONG_TEXT_MAX = 5000;
/** Files allowed on a single due-diligence step. */
export const LAND_PARCEL_DUE_DILIGENCE_STEP_MAX_FILES = 10;

export const LandParcelSchemaDef = {
    project:            {type: "objectId", required: true},
    edifice:            {type: "objectId", required: false},
    title:              {type: "string", required: true, min: 1, max: LAND_PARCEL_SHORT_TEXT_MAX},
    areaSqm:            {type: "number", required: false},
    zoning:             {type: "string", required: false, max: LAND_PARCEL_SHORT_TEXT_MAX},
    currency:           {type: "objectId", required: false},
    acquisitionCost:    {type: "number", required: false},
    description:        {type: "string", required: false, max: LAND_PARCEL_LONG_TEXT_MAX},
    notes:              {type: "string", required: false, max: LAND_PARCEL_LONG_TEXT_MAX},
    media:              {type: "mediaIdArray", required: false},
} as const;

export type CreateLandParcelFormType = InferCreateForm<typeof LandParcelSchemaDef>;
export type EditLandParcelFormType = InferEditForm<typeof LandParcelSchemaDef>;
