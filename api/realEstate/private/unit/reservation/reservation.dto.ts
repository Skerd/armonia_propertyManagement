import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {Media} from "../../../../../../core/types";
import type {CompanyBlank} from "../../../../../../core/dto/company.dto";
import type {CurrencySimple} from "../../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {EdificeSimple} from "../../../../../dto/edifice.dto";
import type {FloorSimple} from "../../../../../dto/floor.dto";
import type {ProjectSimple} from "../../../../../dto/project.dto";
import type {UnitSale} from "../../../../../dto/unit.dto";

/** Reservation document as returned by list/single APIs (DTO). */
export type Reservation = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    unit: UnitSale;
    project?: ProjectSimple;
    edifice?: EdificeSimple;
    floor?: FloorSimple;
    reservedBy: SimpleBlankUser;
    reservedByCompany: CompanyBlank;
    client: SimpleBlankUser;
    reservationDate: string;
    expirationDate?: string;
    reservationNotes?: string;
    depositAmount?: number;
    depositCurrency?: CurrencySimple;
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
