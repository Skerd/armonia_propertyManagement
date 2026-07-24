import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Leistungsverzeichnis (LV) header — Devisierung per NPK/CRB or custom.
export const specificationStatusValues = ["draft", "issued", "tender_ready", "awarded", "archived"] as const;
export type SpecificationStatusValue = typeof specificationStatusValues[number];

export const specificationStandardValues = ["npk", "custom"] as const;
export type SpecificationStandardValue = typeof specificationStandardValues[number];

export const SpecificationSchemaDef = {
    project:        {type: "objectId", required: true},
    edifice:        {type: "objectId", required: false},
    workPackage:    {type: "objectId", required: false},
    standard:       {type: "enum", required: false, options: specificationStandardValues},
    title:          {type: "string", required: true},
    currency:       {type: "objectId", required: true},
    totalEstimated: {type: "number", required: false},
    description:    {type: "string", required: false},
    notes:          {type: "string", required: false},
} as const;

export type CreateSpecificationFormType = InferCreateForm<typeof SpecificationSchemaDef>;
export type EditSpecificationFormType = InferEditForm<typeof SpecificationSchemaDef>;
