import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Liquiditätsplanung (§3.M) — inflow/outflow plan over a timeline.
export const liquidityGranularityValues = ["monthly", "quarterly", "yearly"] as const;
export type LiquidityGranularityValue = typeof liquidityGranularityValues[number];

export const LiquidityPlanSchemaDef = {
    project:       {type: "objectId", required: true},
    title:         {type: "string", required: true},
    horizonStart:  {type: "date", required: false},
    horizonEnd:    {type: "date", required: false},
    granularity:   {type: "enum", required: false, options: liquidityGranularityValues},
    currency:      {type: "objectId", required: true},
    notes:         {type: "string", required: false},
} as const;

export type CreateLiquidityPlanFormType = InferCreateForm<typeof LiquidityPlanSchemaDef>;
export type EditLiquidityPlanFormType = InferEditForm<typeof LiquidityPlanSchemaDef>;
