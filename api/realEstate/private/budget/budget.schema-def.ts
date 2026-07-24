import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const budgetStatusValues = ["draft", "pending_approval", "approved", "locked", "superseded"] as const;
export type BudgetStatusValue = typeof budgetStatusValues[number];

// Kostenvoranschlag method — how the estimate is structured.
export const budgetMethodValues = ["ebkp_h", "bkp", "custom"] as const;
export type BudgetMethodValue = typeof budgetMethodValues[number];

// Which cost-standard the BoqItem lines are classified against (mirrors CostClassification.standard).
export const budgetClassificationStandardValues = ["ebkp_h", "ebkp_bau", "bkp", "npk", "custom"] as const;
export type BudgetClassificationStandardValue = typeof budgetClassificationStandardValues[number];

export const BudgetSchemaDef = {
    project:        {type: "objectId", required: true},
    edifice:        {type: "objectId", required: false},
    title:          {type: "string", required: true},
    version:        {type: "number", required: false},
    method:         {type: "enum", required: false, options: budgetMethodValues},
    classificationStandard: {type: "enum", required: false, options: budgetClassificationStandardValues},
    revisionNo:     {type: "number", required: false},
    supersedesBudget: {type: "objectId", required: false},
    bimSource:      {type: "objectId", required: false},
    currency:       {type: "objectId", required: true},
    approvedTotal:  {type: "number", required: false},
    contingencyPercent: {type: "number", required: false},
    description:    {type: "string", required: false},
    notes:          {type: "string", required: false},
} as const;

export type CreateBudgetFormType = InferCreateForm<typeof BudgetSchemaDef>;
export type EditBudgetFormType = InferEditForm<typeof BudgetSchemaDef>;
