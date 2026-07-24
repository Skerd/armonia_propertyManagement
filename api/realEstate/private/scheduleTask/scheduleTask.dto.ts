import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ScheduleTask = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    milestone?: {_id: string; name?: string; title?: string};
    title: string;
    description?: string;
    status?: string;
    assignee?: {_id: string; name?: string; surname?: string};
    plannedStart?: string;
    plannedEnd?: string;
    actualStart?: string;
    actualEnd?: string;
    percentComplete?: number;
    predecessors?: string[] | {_id: string; title?: string}[];
    dependencyType?: string;
    lagDays?: number;
    bkpCode?: string;
    notes?: string;
    media?: Media[];
};
