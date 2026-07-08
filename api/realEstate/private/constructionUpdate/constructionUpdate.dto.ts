import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ConstructionUpdate = OwnershipData & DeletedData & LifeCycleData &{
    _id: string;
    name?: string;
    project: {
        _id: string;
        name: string
    };
    edifice?: {
        _id: string;
        name: string
    };
    title: string;
    description?: string;
    progressPercent: number;
    updateDate: string;
    photos?: Media[];
};
