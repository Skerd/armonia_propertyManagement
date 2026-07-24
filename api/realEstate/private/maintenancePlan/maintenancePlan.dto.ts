import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
export type MaintenancePlan = OwnershipData & DeletedData & LifeCycleData & {
    _id: string; name?: string;
    asset?: {_id: string; title?: string} | string;
    edifice?: {_id: string; name?: string} | string;
    title: string; planType?: string; intervalDays?: number; nextDueAt?: string; responsibleParty?: string; active?: boolean; notes?: string;
};
