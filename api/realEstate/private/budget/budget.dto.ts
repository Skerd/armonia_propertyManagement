import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Budget = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    version?: number; currency: {_id: string; name?: string; symbol?: string}; approvedTotal?: number; contingencyPercent?: number;
    method?: string;
    classificationStandard?: string;
    revisionNo?: number;
    supersedesBudget?: {_id: string; name?: string; title?: string; revisionNo?: number} | string;
    bimSource?: string;
};
