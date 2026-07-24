import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type HandoverPackage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    unit?: {_id: string; name?: string}; omManualsComplete?: boolean; asBuiltComplete?: boolean; keysTransferred?: boolean; trainingComplete?: boolean; media?: Media[];
};
