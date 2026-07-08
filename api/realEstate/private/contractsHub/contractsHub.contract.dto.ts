import type {
    ContractPaymentStatus,
    ContractRegistryStatus,
    ContractRegistryType,
    ContractsHubSourceType,
} from "./contractsHub.constants";

export type ContractRegistryRow = {
    _id: string;
    sourceType: ContractsHubSourceType;
    sourceId: string;
    contractNumber?: string;
    client?: {_id: string; name?: string; surname?: string};
    project?: {_id: string; name?: string};
    unit?: {_id: string; name?: string; unitNumber?: string};
    contractType: ContractRegistryType;
    status: ContractRegistryStatus;
    signatureDate?: string;
    uploadDate?: string;
    agent?: {_id: string; name?: string; surname?: string};
    paymentStatus: ContractPaymentStatus;
};
