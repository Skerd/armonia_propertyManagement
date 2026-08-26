import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (generated payment code). */
export const RENTAL_PAYMENT_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (notes). */
export const RENTAL_PAYMENT_LONG_TEXT_MAX = 5000;

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
    notes:        { type: "string",   required: false, max: RENTAL_PAYMENT_LONG_TEXT_MAX },
    receiptMedia: { type: "mediaId",  required: false },
} as const;

export type CreateRentalPaymentFormType = InferCreateForm<typeof RentalPaymentSchemaDef>;
export type EditRentalPaymentFormType = InferEditForm<typeof RentalPaymentSchemaDef>;
