import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type LiquidityLine = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    plan: {_id: string; name?: string; title?: string};
    period?: string;
    direction: string;
    source?: string;
    title?: string;
    plannedAmount?: number;
    actualAmount?: number;
    currency: {_id: string; abbreviation?: string};
    notes?: string;
};
