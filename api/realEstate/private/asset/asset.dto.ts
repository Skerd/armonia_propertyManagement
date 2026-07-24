import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Asset = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    edifice?: {_id: string; name?: string} | string;
    unit?: {_id: string; unitNumber?: string} | string;
    title: string;
    category?: string;
    manufacturer?: string;
    serial?: string;
    installDate?: string;
    warranty?: {_id: string; name?: string} | string;
    lifecycleStatus?: string;
    notes?: string;
};
