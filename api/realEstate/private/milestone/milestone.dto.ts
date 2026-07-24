import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type MilestoneRef = {
    _id: string;
    name?: string;
    title?: string;
};

export type Milestone = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    status?: string;
    plannedStart?: string;
    plannedEnd?: string;
    actualStart?: string;
    actualEnd?: string;
    weightPercent?: number;
    predecessors?: MilestoneRef[];
    notes?: string;
    media?: Media[];
};
