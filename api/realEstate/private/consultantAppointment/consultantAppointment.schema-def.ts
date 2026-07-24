import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const consultantAppointmentStatusValues = ["draft", "active", "completed", "terminated"] as const;
export type ConsultantAppointmentStatusValue = typeof consultantAppointmentStatusValues[number];

// Honorarvertrag (§3.H) — SIA-norm fee agreement models.
export const consultantFeeModelValues = ["sia_102", "sia_103", "sia_108", "lump_sum", "time_based"] as const;
export type ConsultantFeeModelValue = typeof consultantFeeModelValues[number];

export const consultantBasisKindValues = ["construction_cost", "fixed", "hourly"] as const;
export type ConsultantBasisKindValue = typeof consultantBasisKindValues[number];

export const ConsultantAppointmentSchemaDef = {
    project:      {type: "objectId", required: true},
    constructorRef:  {type: "objectId", required: true},
    title:        {type: "string", required: true},
    role:         {type: "enum", required: true, options: ["architect","engineer","qs","pm","surveyor","other"]},
    scope:        {type: "string", required: false},
    currency:     {type: "objectId", required: false},
    feeAmount:    {type: "number", required: false},
    feeModel:     {type: "enum", required: false, options: consultantFeeModelValues},
    basisKind:    {type: "enum", required: false, options: consultantBasisKindValues},
    adjustmentFactor: {type: "number", required: false},
    hourlyRate:   {type: "number", required: false},
    cappedAmount: {type: "number", required: false},
    startDate:    {type: "date", required: false},
    endDate:      {type: "date", required: false},
    deliverables: {type: "string", required: false},
    notes:        {type: "string", required: false},
    media:        {type: "mediaIdArray", required: false},
} as const;

export type CreateConsultantAppointmentFormType = InferCreateForm<typeof ConsultantAppointmentSchemaDef>;
export type EditConsultantAppointmentFormType = InferEditForm<typeof ConsultantAppointmentSchemaDef>;
