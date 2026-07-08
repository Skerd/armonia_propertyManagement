import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const snagStatusValues  = ["open", "in_progress", "resolved", "rejected"] as const;
export const snagSeverityValues = ["low", "medium", "high", "critical"] as const;
export type SnagStatusValue   = typeof snagStatusValues[number];
export type SnagSeverityValue = typeof snagSeverityValues[number];

export const SnagSchemaDef = {
    unit:        { type: "objectId", required: true  },
    title:       { type: "string",   required: true  },
    description: { type: "string",   required: false },
    location:    { type: "string",   required: false }, // room/area description
    // status:      { type: "enum",     required: false, options: snagStatusValues },
    severity:    { type: "enum",     required: false, options: snagSeverityValues },
    reportedBy:  { type: "objectId", required: false },
    assignedTo:  { type: "objectId", required: false },
    dueDate:     { type: "date",     required: false },
    resolvedAt:  { type: "date",     required: false },
    photos:      { type: "mediaIdArray", required: false },
    notes:       { type: "string",   required: false },
} as const;

export type CreateSnagFormType = InferCreateForm<typeof SnagSchemaDef>;
export type EditSnagFormType = InferEditForm<typeof SnagSchemaDef>;
