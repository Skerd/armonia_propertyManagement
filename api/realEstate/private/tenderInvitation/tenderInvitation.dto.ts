import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type TenderInvitation = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    tender: {_id: string; name?: string; title?: string; status?: string};
    constructorRef: {_id: string; name?: string};
    invitedAt?: string;
    respondedAt?: string;
    portalAccessToken?: string;
    notes?: string;
    status?: string;
};
