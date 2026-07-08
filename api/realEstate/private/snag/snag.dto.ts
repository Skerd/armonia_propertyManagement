import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Snag = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    unit: {_id: string; name: string; unitNumber?: string};
    title: string;
    description?: string;
    location?: string;
    status?: string;
    severity?: string;
    reportedBy?: {_id: string; name?: string; surname?: string};
    assignedTo?: {_id: string; name?: string; surname?: string};
    dueDate?: string;
    resolvedAt?: string;
    photos?: Media[];
    notes?: string;
};
