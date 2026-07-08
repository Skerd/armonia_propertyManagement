import type {InferCreateForm} from "../../../../../../core/helpers/schemaDefBuilder";
import {RESERVATION_SOURCE_VALUES} from "./reservation.constants";

export const ReservationSchemaDef = {
    unit:                { type: "objectId",    required: true  },
    reservedBy:          { type: "objectId",    required: true  },
    reservedByCompany:   { type: "objectId",    required: true  },
    client:              { type: "objectId",    required: true  },
    reservationNotes:    { type: "string",      required: false },
    referralCode:        { type: "string",      required: false },
    depositAmount:       { type: "number",      required: false, min: 0 },
    depositCurrency:     { type: "objectId",    required: false },
    paymentMethod:       { type: "string",      required: false },
    cancellationReason:  { type: "string",      required: false },
    source:              { type: "enum",        required: false, options: RESERVATION_SOURCE_VALUES },
    // System-managed (Mongoose defaults) — not set via create form
    paid:                { type: "boolean",     required: false },
    isActive:            { type: "boolean",     required: false },
    reservationContract: { type: "mediaIdArray", required: false },
    additionalDocuments: { type: "mediaIdArray", required: false },
    expirationDate:      { type: "date",        required: false, validation: "notInThePast", timezone: "UTC" },
} as const;

export type CreateReservationFormType = InferCreateForm<typeof ReservationSchemaDef>;
