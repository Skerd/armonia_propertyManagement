import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ApprovalWorkflow = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    documentType: string;
    title: string;
    approverRole?: string;
    thresholdAmount?: number;
    thresholdCurrency?: {_id: string; abbreviation?: string} | string;
    escalationRole?: string;
    active?: boolean;
    notes?: string;
};
