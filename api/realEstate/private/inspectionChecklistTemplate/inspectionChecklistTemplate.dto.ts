import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type InspectionChecklistTemplate = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    trade?: string; stage?: string; itemsJson?: string;
};
