import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ReservationBlank} from "../../../../dto/reservation.dto";
import type {SaleBlank} from "../../../../dto/sale.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type CommissionStatus = "pending" | "pending_approval" | "approved" | "paid" | "voided";

export type CommissionSourceType = "sale" | "reservation";

export type Commission = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    agent?: SimpleBlankUser;
    recordedByActionUser?: SimpleBlankUser;
    sourceType: CommissionSourceType;
    sourceId: string;
    basis: string;
    basisAmount: number;
    ratePercent: number;
    amount: number;
    sale?: SaleBlank;
    reservation?: ReservationBlank;
    currency?: CurrencySimple;
    status: CommissionStatus;
    notes?: string;
    paidAt?: string;
    voidedAt?: string;
    paymentReference?: string;
    paymentReceiptMediaId?: {
        _id: string;
        url?: string;
        name?: string;
    };
    splits?: {
        agent?: SimpleBlankUser;
        label?: string;
        ratePercent: number;
        amount: number;
    }[];
    unit?: UnitSimple;
};
