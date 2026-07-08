import type {LeaseRegistryStatus} from "./rentalsHub.constants";

export type LeaseRegistryRow = {
    _id: string;
    name?: string;
    status: LeaseRegistryStatus;
    startDate?: string;
    endDate?: string;
    monthlyRent?: number;
    currency?: {_id: string; name?: string; symbol?: string};
    depositAmount?: number;
    depositPaid?: boolean;
    tenant?: {_id: string; name?: string; surname?: string; email?: string};
    unit?: {_id: string; name?: string; unitNumber?: string | number};
    project?: {_id: string; name?: string};
    createdAt?: string;
};
