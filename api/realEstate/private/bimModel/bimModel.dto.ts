import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
export type BimModel = OwnershipData & DeletedData & LifeCycleData & {
    _id: string; name?: string;
    project?: {_id: string; name?: string} | string;
    edifice?: {_id: string; name?: string} | string;
    title: string; version?: string; elementCount?: number; importStatus?: string; notes?: string;
};
