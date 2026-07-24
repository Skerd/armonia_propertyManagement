import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Specification = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    workPackage?: {_id: string; name?: string; title?: string};
    standard?: string;
    title: string;
    currency: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    totalEstimated?: number;
    description?: string;
    notes?: string;
    status?: string;
};
