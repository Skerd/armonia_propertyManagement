import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type LiquidityPlan = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    title: string;
    horizonStart?: string;
    horizonEnd?: string;
    granularity?: string;
    currency: {_id: string; abbreviation?: string};
    notes?: string;
};
