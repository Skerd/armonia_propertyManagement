import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ProjectDocumentRef = {
    _id: string;
    name?: string;
    title?: string;
    documentNumber?: string;
    revision?: string;
};

export type ProjectDocument = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    floor?: {_id: string; name: string};
    unit?: {_id: string; name: string; unitNumber?: string};
    title: string;
    documentNumber?: string;
    discipline: string;
    documentType: string;
    revision?: string;
    revisionDate?: string;
    description?: string;
    notes?: string;
    media?: Media[];
    supersedes?: ProjectDocumentRef;
    status?: string;
    isAsBuilt?: boolean;
};
