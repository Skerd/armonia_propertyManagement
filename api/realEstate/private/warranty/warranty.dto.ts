import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Warranty = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    unit?: {_id: string; name?: string; unitNumber?: string}; startDate: string; endDate: string; retentionAmount?: number; currency?: {_id: string; symbol?: string}; retentionReleaseDate?: string; media?: Media[];
};
