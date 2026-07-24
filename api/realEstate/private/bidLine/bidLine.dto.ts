import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type BidLine = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    bid: {_id: string; name?: string; status?: string};
    specificationItem: {_id: string; name?: string; title?: string; npkPosition?: string};
    title?: string;
    quantity?: number;
    unitPrice?: number;
    lineTotal?: number;
    currency: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    alternativeNote?: string;
    sortIndex?: number;
};
