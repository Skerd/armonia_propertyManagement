import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type DesignStage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    stageType: string; sortOrder?: number;
};
