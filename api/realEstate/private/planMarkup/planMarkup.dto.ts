import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PlanMarkup = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    planDocument: {_id: string; name?: string; title?: string} | string;
    project?: {_id: string; name?: string} | string;
    page?: number;
    layer?: string;
    markerType: string;
    geometryX?: number;
    geometryY?: number;
    geometryW?: number;
    geometryH?: number;
    title: string;
    description?: string;
    createdOnSite?: boolean;
    notes?: string;
    status?: string;
};
