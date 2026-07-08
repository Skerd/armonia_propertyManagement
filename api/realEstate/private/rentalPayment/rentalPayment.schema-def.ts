import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// status and unit are server-managed (excluded from SchemaDef; see excludePaths on Mongoose validate).
// amount/paidAmount are Decimal128 in Mongoose; treated as number in forms.
export const rentalPaymentStatusValues = ["pending", "paid", "overdue", "waived"] as const;
export type RentalPaymentStatusValue = typeof rentalPaymentStatusValues[number];

export const RentalPaymentSchemaDef = {
    lease:        { type: "objectId", required: true  },
    dueDate:      { type: "date",     required: true  },
    amount:       { type: "number",   required: true, min: 0 },
    currency:     { type: "objectId", required: true  },
    paidAmount:   { type: "number",   required: false, min: 0 },
    notes:        { type: "string",   required: false },
    receiptMedia: { type: "mediaId",  required: false },
} as const;

export type CreateRentalPaymentFormType = InferCreateForm<typeof RentalPaymentSchemaDef>;
export type EditRentalPaymentFormType = InferEditForm<typeof RentalPaymentSchemaDef>;
