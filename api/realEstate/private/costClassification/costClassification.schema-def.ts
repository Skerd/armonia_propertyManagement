import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Swiss (Messerli) cost-standard reference data. eBKP-H (SN 506 511) elements,
// eBKP-Bau, BKP account plan, NPK/CRB chapters, plus SIA fee-phase skeletons.
export const costClassificationStandardValues = [
    "ebkp_h",
    "ebkp_bau",
    "bkp",
    "npk",
    "sia",
    "custom",
] as const;
export type CostClassificationStandardValue = typeof costClassificationStandardValues[number];

export const CostClassificationSchemaDef = {
    standard:       {type: "enum", required: true, options: costClassificationStandardValues},
    code:           {type: "string", required: true},
    parentCode:     {type: "string", required: false},
    level:          {type: "number", required: false},
    title:          {type: "string", required: true},
    unitOfMeasure:  {type: "string", required: false},
    sortIndex:      {type: "number", required: false},
    active:         {type: "boolean", required: false},
    notes:          {type: "string", required: false},
} as const;

export type CreateCostClassificationFormType = InferCreateForm<typeof CostClassificationSchemaDef>;
export type EditCostClassificationFormType = InferEditForm<typeof CostClassificationSchemaDef>;
