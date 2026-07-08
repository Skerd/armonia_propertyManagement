import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import {Media} from "../../../../../../core/types";

/** Reservation document as returned by list/single APIs (DTO). */
export type Reservation = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    unit: {
        _id: string;
        name?: string;
        unitNumber?: string;
        unitType?: {
            _id: string;
            name?: string;
            icon?: string;
        };
        price?: number;
        priceCurrency?: {
            _id: string;
            name?: string;
            symbol?: string;
            abbreviation?: string;
        };
    };
    project?: {
        _id: string;
        name?: string;
    };
    edifice?: {
        _id: string;
        name?: string;
    };
    floor?: {
        _id: string;
        name?: string;
    };
    reservedBy: {
        _id: string;
        name?: string;
        surname?: string;
    };
    reservedByCompany: {
        _id: string;
        name?: string;
        vat?: string;
    };
    client: {
        _id: string;
        name?: string;
        surname?: string;
    };
    reservationDate: string;
    expirationDate?: string;
    reservationNotes?: string;
    depositAmount?: number;
    depositCurrency?: {
        _id: string;
        name?: string;
        symbol?: string;
        abbreviation?: string;
    };
    paymentMethod?: string;
    isActive: boolean;
    cancelledAt?: string;
    cancellationReason?: string;
    paid?: boolean;
    /** Outstanding amount in unit sale currency when deposit currency matches (or no deposit currency). */
    remainingBalance?: number;
    /** Derived from `paid` and deposit amount for sheet display. */
    reservationFinancialPaymentState?: "fullyPaid" | "partiallyPaid" | "unpaid";
    /** When the reservation-created confirmation email was dispatched (UTC ISO). */
    confirmationEmailSentAt?: string;
    /** Expiration reminder emails (3d / 1d / day-of), UTC ISO from server jobs. */
    expirationReminderEmailAt3d?: string;
    expirationReminderEmailAt1d?: string;
    expirationReminderEmailAt0d?: string;
    /** Daily job: first observation past expiration calendar day while still unpaid. */
    expiredAt?: string;
    /** Server-managed lifecycle state. */
    status?: "active" | "expired" | "cancelled" | "converted";
    source?: "agent" | "portal" | "referral" | "walk_in" | "social" | "other";
    referralCode?: string;
    reservationContract?: Media[];
    additionalDocuments?: Media[];
};
