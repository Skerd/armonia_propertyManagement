import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type FeasibilityStudy = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    landParcel?: {_id: string; title?: string}; currency?: {_id: string; symbol?: string}; softCostEstimate?: number; hardCostEstimate?: number; residualValue?: number; irrPercent?: number; decision?: string; decisionNotes?: string; decidedBy?: {_id: string; name?: string}; decidedAt?: string; media?: Media[];
};
