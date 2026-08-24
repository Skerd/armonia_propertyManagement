import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const leadStatusValues = ["new", "contacted", "qualified", "proposal", "negotiation", "won", "lost"] as const;
export const leadSourceValues  = ["website", "referral", "social", "event", "cold_call", "walk_in", "chat", "other"] as const;
export const leadInterestValues = ["partnerships", "investments", "platform_support", "reservation", "other"] as const;

export type LeadStatusValue = typeof leadStatusValues[number];
export type LeadSourceValue = typeof leadSourceValues[number];
export type LeadInterestValue = typeof leadInterestValues[number];

/** Short single-line labels (first/last name). */
export const LEAD_SHORT_TEXT_MAX = 128;
/** Email address. */
export const LEAD_EMAIL_MAX = 254;
/** Phone number. */
export const LEAD_PHONE_MAX = 32;
/** Long text / textarea fields (notes, activity notes). */
export const LEAD_LONG_TEXT_MAX = 5000;

export const LeadSchemaDef = {
    firstName:       { type: "string",   required: true,  min: 1, max: LEAD_SHORT_TEXT_MAX },
    lastName:        { type: "string",   required: false, max: LEAD_SHORT_TEXT_MAX },
    email:           { type: "string",   required: false, format: "email" },
    phone:           { type: "string",   required: false, max: LEAD_PHONE_MAX },
    status:          { type: "enum",     required: false, options: leadStatusValues },
    source:          { type: "enum",     required: false, options: leadSourceValues },
    interest:        { type: "enum",     required: false, options: leadInterestValues },
    projectInterest: { type: "objectId", required: false },
    unitInterest:    { type: "objectId", required: false },
    budget:          { type: "number",   required: false, min: 0 },
    budgetCurrency:  { type: "objectId", required: false },
    notes:           { type: "string",   required: false, max: LEAD_LONG_TEXT_MAX },
    assignedTo:      { type: "objectId", required: false },
    followUpDate:    { type: "date",     required: false },
} as const;

export type CreateLeadFormType = InferCreateForm<typeof LeadSchemaDef>;
export type EditLeadFormType = InferEditForm<typeof LeadSchemaDef>;
