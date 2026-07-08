import type {RentalPaymentRegistryStatus} from "./rentalsHub.constants";

export type RentalPaymentRegistryRow = {
    _id: string;
    name?: string;
    status: RentalPaymentRegistryStatus;
    dueDate?: string;
    amount?: number;
    paidAmount?: number;
    paidDate?: string;
    currency?: {_id: string; name?: string; symbol?: string};
    lease?: {_id: string; name?: string};
    tenant?: {_id: string; name?: string; surname?: string};
    unit?: {_id: string; name?: string; unitNumber?: string | number};
    project?: {_id: string; name?: string};
    createdAt?: string;
};
