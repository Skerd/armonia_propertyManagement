import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Submittal = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    specReference?: string; submittedBy?: {_id: string; name?: string}; reviewedBy?: {_id: string; name?: string}; relatedDocument?: {_id: string; title?: string}; media?: Media[];
};
