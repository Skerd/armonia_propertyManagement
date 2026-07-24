import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
export type MaintenanceWorkOrder = OwnershipData & DeletedData & LifeCycleData & {
    _id: string; name?: string;
    plan?: {_id: string; title?: string} | string;
    asset?: {_id: string; title?: string} | string;
    edifice?: {_id: string; name?: string} | string;
    title: string; type?: string; assignee?: {_id: string; name?: string} | string;
    costEstimate?: number; actualCost?: number; currency?: {_id: string; abbreviation?: string} | string;
    dueDate?: string; notes?: string; status?: string;
};
