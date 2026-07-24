import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ProgressClaim = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    constructionContract: {_id: string; title?: string; name?: string}; currency: {_id: string; symbol?: string}; amount: number; certifiedAmount?: number; retentionHeld?: number; retentionReleased?: number; claimPeriodStart?: string; claimPeriodEnd?: string; media?: Media[];
};
