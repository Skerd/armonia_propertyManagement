import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const leadStatusValues = ["new", "contacted", "qualified", "proposal", "negotiation", "won", "lost"] as const;
export const leadSourceValues  = ["website", "referral", "social", "event", "cold_call", "walk_in", "other"] as const;

export type LeadStatusValue = typeof leadStatusValues[number];
export type LeadSourceValue = typeof leadSourceValues[number];

export const LeadSchemaDef = {
    firstName:       { type: "string",   required: true  },
    lastName:        { type: "string",   required: false },
    email:           { type: "string",   required: false, format: "email" },
    phone:           { type: "string",   required: false },
    status:          { type: "enum",     required: false, options: leadStatusValues },
    source:          { type: "enum",     required: false, options: leadSourceValues },
    projectInterest: { type: "objectId", required: false },
    unitInterest:    { type: "objectId", required: false },
    budget:          { type: "number",   required: false, min: 0 },
    budgetCurrency:  { type: "objectId", required: false },
    notes:           { type: "string",   required: false },
    assignedTo:      { type: "objectId", required: false },
    followUpDate:    { type: "date",     required: false },
} as const;

export type CreateLeadFormType = InferCreateForm<typeof LeadSchemaDef>;
export type EditLeadFormType = InferEditForm<typeof LeadSchemaDef>;
