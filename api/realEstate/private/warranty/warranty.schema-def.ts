import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const warrantyStatusValues = ["active", "expired", "void"] as const;
export type WarrantyStatusValue = typeof warrantyStatusValues[number];

export const WarrantySchemaDef = {
    project:              {type: "objectId", required: true},
    edifice:              {type: "objectId", required: false},
    unit:                 {type: "objectId", required: false},
    title:                {type: "string", required: true},
    startDate:            {type: "date", required: true},
    endDate:              {type: "date", required: true},
    retentionAmount:      {type: "number", required: false},
    currency:             {type: "objectId", required: false},
    retentionReleaseDate: {type: "date", required: false},
    description:          {type: "string", required: false},
    notes:                {type: "string", required: false},
    media:                {type: "mediaIdArray", required: false},
} as const;

export type CreateWarrantyFormType = InferCreateForm<typeof WarrantySchemaDef>;
export type EditWarrantyFormType = InferEditForm<typeof WarrantySchemaDef>;
