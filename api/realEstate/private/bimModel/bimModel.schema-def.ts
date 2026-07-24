import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// BIM2COST (§3.O). importStatus/elementCount server-managed.
export const bimModelImportStatusValues = ["uploaded", "importing", "imported", "failed"] as const;
export type BimModelImportStatusValue = typeof bimModelImportStatusValues[number];

export const BimModelSchemaDef = {
    project:      {type: "objectId", required: false},
    edifice:      {type: "objectId", required: false},
    title:        {type: "string", required: true},
    version:      {type: "string", required: false},
    sourceFile:   {type: "mediaId", required: false},
    notes:        {type: "string", required: false},
} as const;

export type CreateBimModelFormType = InferCreateForm<typeof BimModelSchemaDef>;
export type EditBimModelFormType = InferEditForm<typeof BimModelSchemaDef>;
