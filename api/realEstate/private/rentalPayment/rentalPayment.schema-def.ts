import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (generated payment code). */
export const RENTAL_PAYMENT_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (notes). */
export const RENTAL_PAYMENT_LONG_TEXT_MAX = 5000;

// status and unit are server-managed (excluded from SchemaDef; see excludePaths on Mongoose validate).
// amount is Decimal128 in Mongoose; treated as number in forms.
// paidAmount / remaining are action-managed or DTO-derived — not SchemaDef fields.
export const rentalPaymentStatusValues = ["pending", "paid", "partially_paid", "overdue", "waived"] as const;
export type RentalPaymentStatusValue = typeof rentalPaymentStatusValues[number];

export const RentalPaymentSchemaDef = {
    lease:        { type: "objectId", required: true  },
    dueDate:      { type: "date",     required: true  },
    amount:       { type: "number",   required: true, min: 0 },
    currency:     { type: "objectId", required: true  },
    notes:        { type: "string",   required: false, max: RENTAL_PAYMENT_LONG_TEXT_MAX },
    receiptMedia: { type: "mediaId",  required: false },
} as const;

export type CreateRentalPaymentFormType = InferCreateForm<typeof RentalPaymentSchemaDef>;
export type EditRentalPaymentFormType = InferEditForm<typeof RentalPaymentSchemaDef>;
