import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type LandParcel = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project?: {_id: string; name?: string};
    edifice?: {_id: string; name?: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    cadastralReference?: string;
    areaSqm?: number;
    zoning?: string;
    currency?: {_id: string; symbol?: string};
    acquisitionCost?: number;
    dueDiligenceStatus?: string;
    media?: Media[];
};
