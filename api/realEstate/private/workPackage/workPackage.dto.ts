import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type WorkPackage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    constructorRef?: {_id: string; name?: string}; trade?: string; plannedStart?: string; plannedEnd?: string;
};
