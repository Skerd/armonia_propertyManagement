import type {Media} from "../../../../../core/types";
import type {DeletedData, OwnershipData} from "../../../../../core/types/shared.types";

export type Lease = DeletedData & OwnershipData & {
    _id: string;
    name?: string;
    unit?: {_id: string; name?: string; unitNumber?: number};
    tenant?: {_id: string; name?: string; surname?: string; email?: string};
    startDate: string;
    endDate: string;
    monthlyRent: number;
    rentCurrency?: {_id: string; name?: string; symbol?: string};
    depositAmount?: number;
    depositPaid?: boolean;
    depositReturnedAt?: string;
    status?: string;
    terminationDate?: string;
    terminationReason?: string;
    notes?: string;
    contractMedia?: Media;
};
