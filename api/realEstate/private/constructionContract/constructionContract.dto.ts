import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ConstructionContract = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    workPackage?: {_id: string; title?: string}; constructorRef: {_id: string; name?: string}; currency: {_id: string; symbol?: string}; contractValue: number; retentionPercent?: number; performanceBond?: number; paymentTerms?: string; startDate?: string; endDate?: string; media?: Media[];
};
