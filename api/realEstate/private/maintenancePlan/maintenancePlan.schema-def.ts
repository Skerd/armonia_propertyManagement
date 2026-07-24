import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Instandhaltung / Gebäudeunterhalt plan (§3.Q).
export const maintenancePlanTypeValues = ["preventive", "statutory", "renovation"] as const;
export type MaintenancePlanTypeValue = typeof maintenancePlanTypeValues[number];

export const MaintenancePlanSchemaDef = {
    asset:            {type: "objectId", required: false},
    edifice:          {type: "objectId", required: false},
    title:            {type: "string", required: true},
    planType:         {type: "enum", required: false, options: maintenancePlanTypeValues},
    intervalDays:     {type: "number", required: false},
    nextDueAt:        {type: "date", required: false},
    responsibleParty: {type: "string", required: false},
    active:           {type: "boolean", required: false},
    notes:            {type: "string", required: false},
} as const;

export type CreateMaintenancePlanFormType = InferCreateForm<typeof MaintenancePlanSchemaDef>;
export type EditMaintenancePlanFormType = InferEditForm<typeof MaintenancePlanSchemaDef>;
