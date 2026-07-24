import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type VariationOrder = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    constructionContract?: {_id: string; title?: string}; modificationRequest?: {_id: string; title?: string}; currency?: {_id: string; symbol?: string}; costImpact?: number; timeImpactDays?: number; media?: Media[];
    billedAt?: string; billingReference?: string;
};
