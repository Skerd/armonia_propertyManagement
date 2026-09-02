import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (generated lease code). */
export const LEASE_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (notes, termination reason). */
export const LEASE_LONG_TEXT_MAX = 5000;

// Validators extend the builder output for fields it cannot express:
//  - status/depositPaid — server/action-managed (excluded from SchemaDef; see excludePaths on Mongoose validate)
//  - terminationDate/depositReturnedAt — date strings
//  - monthlyRent/depositAmount — Decimal128 in Mongoose; treated as number in forms
export const leaseStatusValues = ["active", "expired", "terminated"] as const;
export type LeaseStatusValue = typeof leaseStatusValues[number];

export const LeaseSchemaDef = {
    unit:              { type: "objectId", required: true  },
    tenant:            { type: "objectId", required: true  },
    startDate:         { type: "date",     required: true  },
    endDate:           { type: "date",     required: true, afterField: "startDate" },
    monthlyRent:       { type: "number",   required: true, min: 0 },
    rentCurrency:      { type: "objectId", required: true  },
    depositAmount:     { type: "number",   required: false, min: 0 },
    lateFeePercentage: { type: "number",   required: false, min: 0, max: 100 },
    gracePeriodDays:   { type: "number",   required: false, min: 0 },
    terminationReason: { type: "string",   required: false, max: LEASE_LONG_TEXT_MAX },
    notes:             { type: "string",   required: false, max: LEASE_LONG_TEXT_MAX },
    contractMedia:     { type: "mediaId",  required: true },
} as const;

export type CreateLeaseFormType = InferCreateForm<typeof LeaseSchemaDef>;
export type EditLeaseFormType = InferEditForm<typeof LeaseSchemaDef>;
