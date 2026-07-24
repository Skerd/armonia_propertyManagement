import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const liquidityDirectionValues = ["inflow", "outflow"] as const;
export type LiquidityDirectionValue = typeof liquidityDirectionValues[number];

export const liquiditySourceValues = ["owner_contract", "payment_plan", "cost_commitment", "contractor_invoice", "fee", "manual"] as const;
export type LiquiditySourceValue = typeof liquiditySourceValues[number];

export const LiquidityLineSchemaDef = {
    plan:          {type: "objectId", required: true},
    period:        {type: "date", required: false},
    direction:     {type: "enum", required: true, options: liquidityDirectionValues},
    source:        {type: "enum", required: false, options: liquiditySourceValues},
    title:         {type: "string", required: false},
    plannedAmount: {type: "number", required: false},
    actualAmount:  {type: "number", required: false},
    currency:      {type: "objectId", required: true},
    notes:         {type: "string", required: false},
} as const;

export type CreateLiquidityLineFormType = InferCreateForm<typeof LiquidityLineSchemaDef>;
export type EditLiquidityLineFormType = InferEditForm<typeof LiquidityLineSchemaDef>;
