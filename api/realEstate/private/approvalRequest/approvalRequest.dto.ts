import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ApprovalRequest = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    workflow?: {_id: string; title?: string} | string;
    documentType: string;
    targetType: string;
    targetId: string;
    amount?: number;
    currency?: {_id: string; abbreviation?: string} | string;
    currentStage?: string;
    primaryDecision?: string;
    escalationDecision?: string;
    notes?: string;
    status?: string;
};
