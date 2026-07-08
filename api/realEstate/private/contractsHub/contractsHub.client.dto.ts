import type {ClientRegistryStatus} from "./contractsHub.constants";

export type ClientRegistryRow = {
    _id: string;
    clientId: string;
    unitId: string;
    name?: string;
    surname?: string;
    phone?: string;
    email?: string;
    project?: {_id: string; name?: string};
    unit?: {_id: string; name?: string; unitNumber?: string};
    typology?: string;
    surface?: number;
    unitValue?: number;
    currency?: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    status: ClientRegistryStatus;
    bookingDate?: string;
    contractDate?: string;
    agent?: {_id: string; name?: string; surname?: string};
    paid?: number;
    remaining?: number;
    sourceType?: "sale" | "reservation";
    sourceId?: string;
};
