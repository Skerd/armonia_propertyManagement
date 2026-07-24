import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type Bid = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    tender: {_id: string; name?: string; title?: string; status?: string};
    tenderInvitation?: {_id: string; name?: string; status?: string};
    constructorRef: {_id: string; name?: string};
    total?: number;
    currency: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    coveringNotes?: string;
    submittedAt?: string;
    notes?: string;
    status?: string;
};
