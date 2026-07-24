import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type CostClassification = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    standard: string;
    code: string;
    parentCode?: string;
    level?: number;
    title: string;
    unitOfMeasure?: string;
    sortIndex?: number;
    active?: boolean;
    notes?: string;
};
