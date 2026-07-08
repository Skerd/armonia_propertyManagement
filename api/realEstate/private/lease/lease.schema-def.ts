import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Validators extend the builder output for fields it cannot express:
//  - status — server/action-managed (excluded from SchemaDef; see excludePaths on Mongoose validate)
//  - startDate/endDate/terminationDate/depositReturnedAt — date strings
//  - monthlyRent/depositAmount — Decimal128 in Mongoose; treated as number in forms
export const leaseStatusValues = ["active", "expired", "terminated"] as const;
export type LeaseStatusValue = typeof leaseStatusValues[number];

export const LeaseSchemaDef = {
    unit:              { type: "objectId", required: true  },
    tenant:            { type: "objectId", required: true  },
    startDate:         { type: "date",     required: true  },
    endDate:           { type: "date",     required: true  },
    monthlyRent:       { type: "number",   required: true, min: 0 },
    rentCurrency:      { type: "objectId", required: true  },
    depositAmount:     { type: "number",   required: false, min: 0 },
    depositPaid:       { type: "boolean",  required: false },
    terminationReason: { type: "string",   required: false },
    notes:             { type: "string",   required: false },
    contractMedia:     { type: "mediaId",  required: false },
} as const;

export type CreateLeaseFormType = InferCreateForm<typeof LeaseSchemaDef>;
export type EditLeaseFormType = InferEditForm<typeof LeaseSchemaDef>;
