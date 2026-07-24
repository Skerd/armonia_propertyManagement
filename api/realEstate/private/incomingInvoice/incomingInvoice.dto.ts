import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type IncomingInvoice = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    title?: string;
    project?: {_id: string; name?: string} | string;
    extractedSupplierName?: string;
    extractedIban?: string;
    extractedAmount?: number;
    extractedCurrencyCode?: string;
    extractedInvoiceNumber?: string;
    extractedInvoiceDate?: string;
    extractedDueDate?: string;
    extractedQrReference?: string;
    matchedConstructor?: {_id: string; name?: string} | string;
    matchedContract?: {_id: string; name?: string} | string;
    bkpAccountCode?: string;
    currency?: {_id: string; abbreviation?: string} | string;
    ocrStatus?: string;
    createdContractorInvoice?: {_id: string; name?: string} | string;
    notes?: string;
    status?: string;
};
