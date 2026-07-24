import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Honorarberechnung (§3.H) — derived SIA fee. totalFee/status are server-managed.
export const feeCalculationStatusValues = ["planned", "earned", "invoiced", "paid"] as const;
export type FeeCalculationStatusValue = typeof feeCalculationStatusValues[number];

export const FeeCalculationSchemaDef = {
    consultantAppointment: {type: "objectId", required: true},
    basisAmount:           {type: "number", required: false},
    feePercent:            {type: "number", required: false},
    adjustmentFactor:      {type: "number", required: false},
    currency:              {type: "objectId", required: true},
    notes:                 {type: "string", required: false},
} as const;

export type CreateFeeCalculationFormType = InferCreateForm<typeof FeeCalculationSchemaDef>;
export type EditFeeCalculationFormType = InferEditForm<typeof FeeCalculationSchemaDef>;
