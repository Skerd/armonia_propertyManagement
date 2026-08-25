import type {InferCreateForm} from "../../../../../../core/helpers/schemaDefBuilder";
import {RESERVATION_SOURCE_VALUES} from "./reservation.constants";

/** Short single-line fields (referral code, payment method). */
export const RESERVATION_SHORT_TEXT_MAX = 128;
/** Long text / textarea fields (notes, cancellation reason). */
export const RESERVATION_LONG_TEXT_MAX = 5000;

export const ReservationSchemaDef = {
    unit:                { type: "objectId",    required: true  },
    reservedBy:          { type: "objectId",    required: true  },
    reservedByCompany:   { type: "objectId",    required: true  },
    client:              { type: "objectId",    required: true  },
    reservationNotes:    { type: "string",      required: false, max: RESERVATION_LONG_TEXT_MAX },
    referralCode:        { type: "string",      required: false, max: RESERVATION_SHORT_TEXT_MAX },
    depositAmount:       { type: "number",      required: false, min: 0 },
    depositCurrency:     { type: "objectId",    required: false },
    paymentMethod:       { type: "string",      required: false, max: RESERVATION_SHORT_TEXT_MAX },
    cancellationReason:  { type: "string",      required: false, max: RESERVATION_LONG_TEXT_MAX },
    source:              { type: "enum",        required: false, options: RESERVATION_SOURCE_VALUES },
    // System-managed (Mongoose defaults) — not set via create form
    paid:                { type: "boolean",     required: false },
    isActive:            { type: "boolean",     required: false },
    reservationContract: { type: "mediaIdArray", required: false },
    additionalDocuments: { type: "mediaIdArray", required: false },
    expirationDate:      { type: "date",        required: false, validation: "notInThePast", timezone: "UTC" },
} as const;

export type CreateReservationFormType = InferCreateForm<typeof ReservationSchemaDef>;
