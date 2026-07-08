import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import {Currency} from "../../../../../core/database/types";

export type LeadActivityEntry = {
    _id: string;
    action: string;
    notes?: string;
    performedBy?: {_id: string; name?: string; surname?: string};
    performedAt: string;
};

export type Lead = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    status?: string;
    source?: string;
    projectInterest?: {_id: string; name?: string};
    unitInterest?: {_id: string; name?: string; unitNumber?: number};
    budget?: number;
    budgetCurrency?: Currency;
    notes?: string;
    assignedTo?: {_id: string; name?: string; surname?: string};
    followUpDate?: string;
    convertedAt?: string;
    activityLog?: LeadActivityEntry[];
};
