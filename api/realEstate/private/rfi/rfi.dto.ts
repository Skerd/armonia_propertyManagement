import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type Rfi = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    question: string; answer?: string; askedBy?: {_id: string; name?: string; surname?: string}; answeredBy?: {_id: string; name?: string; surname?: string}; dueDate?: string; relatedDocument?: {_id: string; title?: string}; media?: Media[];
};
