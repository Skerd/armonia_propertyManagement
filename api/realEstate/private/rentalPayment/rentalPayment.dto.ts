import type {Media} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {LeaseSimple} from "../../../../dto/lease.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type RentalPayment = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    lease?: LeaseSimple;
    unit?: UnitSimple;
    dueDate: string;
    amount: number;
    currency?: CurrencySimple;
    status?: string;
    paidDate?: string;
    paidAmount?: number;
    remaining: number;
    lateFeeAmount?: number;
    paymentReceipts?: {
        amount: number;
        paidDate: string;
        notes?: string;
        currency?: CurrencySimple;
        media?: Media[];
    }[];
    paymentReceiptsMedia?: Media[];
    notes?: string;
    receiptMedia?: Media;
};
