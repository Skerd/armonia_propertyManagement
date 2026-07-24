import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const boqItemStatusValues = ["active", "cancelled"] as const;
export type BoqItemStatusValue = typeof boqItemStatusValues[number];

// Which cost-standard this line is coded against (echo of CostClassification.standard).
export const boqItemClassificationStandardValues = ["ebkp_h", "ebkp_bau", "bkp", "npk", "custom"] as const;
export type BoqItemClassificationStandardValue = typeof boqItemClassificationStandardValues[number];

export const BoqItemSchemaDef = {
    budget:         {type: "objectId", required: true},
    project:        {type: "objectId", required: true},
    edifice:        {type: "objectId", required: false},
    constructorRef:    {type: "objectId", required: false},
    classificationStandard: {type: "enum", required: false, options: boqItemClassificationStandardValues},
    classificationCode: {type: "string", required: false},
    elementCode:    {type: "string", required: false},
    wbsCode:        {type: "string", required: false},
    trade:          {type: "string", required: false},
    category:       {type: "string", required: false},
    title:          {type: "string", required: true},
    description:    {type: "string", required: false},
    unitOfMeasure:  {type: "string", required: false},
    plannedQty:     {type: "number", required: false},
    plannedRate:    {type: "number", required: false},
    plannedAmount:  {type: "number", required: false},
    actualQty:      {type: "number", required: false},
    actualAmount:   {type: "number", required: false},
    currency:       {type: "objectId", required: true},
    notes:          {type: "string", required: false},
} as const;

export type CreateBoqItemFormType = InferCreateForm<typeof BoqItemSchemaDef>;
export type EditBoqItemFormType = InferEditForm<typeof BoqItemSchemaDef>;
