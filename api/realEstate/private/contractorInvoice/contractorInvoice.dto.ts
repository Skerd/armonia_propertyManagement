import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type ContractorInvoice = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    constructorRef: {_id: string; name?: string};
    invoiceNumber?: string;
    invoiceDate?: string;
    dueDate?: string;
    grossAmount?: number;
    netAmount?: number;
    vatAmount?: number;
    retentionHeld?: number;
    bkpAccountCode?: string;
    qrBillReference?: string;
    source?: string;
    currency: {_id: string; abbreviation?: string; symbol?: string};
    notes?: string;
    status?: string;
};
