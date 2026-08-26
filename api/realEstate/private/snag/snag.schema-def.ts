import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const snagStatusValues  = ["open", "in_progress", "resolved", "rejected"] as const;
export const snagSeverityValues = ["low", "medium", "high", "critical"] as const;
export type SnagStatusValue   = typeof snagStatusValues[number];
export type SnagSeverityValue = typeof snagSeverityValues[number];

/** Short single-line labels (title, location, trade). */
export const SNAG_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (description, notes, root cause). */
export const SNAG_LONG_TEXT_MAX = 5000;

export const SnagSchemaDef = {
    unit:           { type: "objectId",     required: true  },
    title:          { type: "string",       required: true,  min: 1, max: SNAG_SHORT_TEXT_MAX },
    description:    { type: "string",       required: false, max: SNAG_LONG_TEXT_MAX },
    location:       { type: "string",       required: false, max: SNAG_SHORT_TEXT_MAX },
    severity:       { type: "enum",         required: false, options: snagSeverityValues },
    reportedBy:     { type: "objectId",     required: false },
    assignedTo:     { type: "objectId",     required: false },
    dueDate:        { type: "date",         required: false },
    resolvedAt:     { type: "date",         required: false },
    photos:         { type: "mediaIdArray", required: false },
    notes:          { type: "string",       required: false, max: SNAG_LONG_TEXT_MAX },
    trade:          { type: "string",       required: false, max: SNAG_SHORT_TEXT_MAX },
    workPackage:    { type: "objectId",     required: false },
    rootCause:      { type: "string",       required: false, max: SNAG_LONG_TEXT_MAX },
    costImpact:     { type: "number",       required: false },
    isWarranty:     { type: "boolean",      required: false },
    isDlp:          { type: "boolean",      required: false },
    variationOrder: { type: "objectId",     required: false },
} as const;

export type CreateSnagFormType = InferCreateForm<typeof SnagSchemaDef>;
export type EditSnagFormType = InferEditForm<typeof SnagSchemaDef>;
