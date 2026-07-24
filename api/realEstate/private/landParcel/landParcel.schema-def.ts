import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const landParcelStatusValues = ["prospect", "under_dd", "acquired", "disposed"] as const;
export type LandParcelStatusValue = typeof landParcelStatusValues[number];

export const LandParcelSchemaDef = {
    project:            {type: "objectId", required: false},
    title:              {type: "string", required: true},
    cadastralReference: {type: "string", required: false},
    areaSqm:            {type: "number", required: false},
    zoning:             {type: "string", required: false},
    currency:           {type: "objectId", required: false},
    acquisitionCost:    {type: "number", required: false},
    dueDiligenceStatus: {type: "string", required: false},
    description:        {type: "string", required: false},
    notes:              {type: "string", required: false},
    media:              {type: "mediaIdArray", required: false},
} as const;

export type CreateLandParcelFormType = InferCreateForm<typeof LandParcelSchemaDef>;
export type EditLandParcelFormType = InferEditForm<typeof LandParcelSchemaDef>;
