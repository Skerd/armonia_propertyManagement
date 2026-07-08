import type {Media} from "../../../../../core/types";
import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type RentalPayment = DeletedData & OwnershipData & {
    _id: string;
    name?: string;
    lease?: {_id: string; name?: string};
    unit?: {_id: string; name?: string; unitNumber?: number};
    dueDate: string;
    amount: number;
    currency?: {_id: string; name?: string; symbol?: string};
    status?: string;
    paidDate?: string;
    paidAmount?: number;
    notes?: string;
    receiptMedia?: Media;
};
