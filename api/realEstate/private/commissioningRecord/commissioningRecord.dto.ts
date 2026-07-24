import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type CommissioningRecord = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    unit?: {_id: string; name?: string}; handoverPackage?: {_id: string; title?: string}; systemName?: string; testDate?: string; resultNotes?: string; inspectedBy?: {_id: string; name?: string}; media?: Media[];
};
