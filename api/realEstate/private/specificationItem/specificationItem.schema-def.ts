import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// LV position (Leistungsverzeichnis-Position) under a Specification.
export const specificationItemStatusValues = ["active", "cancelled"] as const;
export type SpecificationItemStatusValue = typeof specificationItemStatusValues[number];

export const specificationItemClassificationStandardValues = ["ebkp_h", "ebkp_bau", "bkp", "npk", "custom"] as const;
export type SpecificationItemClassificationStandardValue = typeof specificationItemClassificationStandardValues[number];

// lineTotal is server-computed (quantity * unitPrice) — not part of the writable form.
export const SpecificationItemSchemaDef = {
    specification:  {type: "objectId", required: true},
    project:        {type: "objectId", required: false},
    title:          {type: "string", required: true},
    npkChapter:     {type: "string", required: false},
    npkPosition:    {type: "string", required: false},
    isRPosition:    {type: "boolean", required: false},
    description:    {type: "string", required: false},
    unitOfMeasure:  {type: "string", required: false},
    quantity:       {type: "number", required: false},
    unitPrice:      {type: "number", required: false},
    classificationStandard: {type: "enum", required: false, options: specificationItemClassificationStandardValues},
    classificationCode: {type: "string", required: false},
    currency:       {type: "objectId", required: true},
    sortIndex:      {type: "number", required: false},
    notes:          {type: "string", required: false},
} as const;

export type CreateSpecificationItemFormType = InferCreateForm<typeof SpecificationItemSchemaDef>;
export type EditSpecificationItemFormType = InferEditForm<typeof SpecificationItemSchemaDef>;
