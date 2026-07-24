import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type CostCommitment = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    budget?: {_id: string; title?: string}; constructorRef?: {_id: string; name?: string}; currency: {_id: string; symbol?: string}; committedAmount: number; retentionPercent?: number; issuedAt?: string; media?: Media[];
};
