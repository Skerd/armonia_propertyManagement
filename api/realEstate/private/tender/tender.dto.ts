import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Tender = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    specification: {_id: string; name?: string; title?: string; status?: string};
    title: string;
    trades?: string[];
    submissionDeadline?: string;
    openingDate?: string;
    description?: string;
    notes?: string;
    status?: string;
};
