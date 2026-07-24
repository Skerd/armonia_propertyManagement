import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type SafetyIncident = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    severity: string; location?: string; incidentDate: string; personsInvolved?: string; correctiveActions?: string; reportedBy?: {_id: string; name?: string}; media?: Media[];
};
