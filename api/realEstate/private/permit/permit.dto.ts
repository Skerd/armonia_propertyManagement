import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Permit = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    permitType: string;
    authority?: string;
    referenceNumber?: string;
    description?: string;
    notes?: string;
    status?: string;
    submittedAt?: string;
    approvedAt?: string;
    expiresAt?: string;
    renewedAt?: string;
    media?: Media[];
};
