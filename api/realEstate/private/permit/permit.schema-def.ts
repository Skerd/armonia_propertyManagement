import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const permitStatusValues = ["draft", "submitted", "under_review", "approved", "rejected", "expired"] as const;
export const permitTypeValues   = ["building", "excavation", "environmental", "fire", "utility", "occupancy", "zoning", "other"] as const;
export type PermitStatusValue = typeof permitStatusValues[number];
export type PermitTypeValue   = typeof permitTypeValues[number];

export const PermitSchemaDef = {
    project:         { type: "objectId",     required: true  },
    edifice:         { type: "objectId",     required: false },
    title:           { type: "string",       required: true  },
    permitType:      { type: "enum",         required: true,  options: permitTypeValues },
    authority:       { type: "string",       required: false }, // regulatory body name
    referenceNumber: { type: "string",       required: false },
    description:     { type: "string",       required: false },
    notes:           { type: "string",       required: false },
    submittedAt:     { type: "date",         required: false },
    approvedAt:      { type: "date",         required: false },
    expiresAt:       { type: "date",         required: false },
    media:           { type: "mediaIdArray", required: false },
} as const;

export type CreatePermitFormType = InferCreateForm<typeof PermitSchemaDef>;
export type EditPermitFormType = InferEditForm<typeof PermitSchemaDef>;
