import type {
    ClientRegistryStatus,
    ContractRegistryStatus,
    ContractRegistryType,
} from "./contractsHub.constants";

export type ContractsHubPagination = {
    page?: number;
    limit?: number;
};

export type ContractsListFormType = ContractsHubPagination & {
    search?: string;
    projectId?: string;
    contractType?: ContractRegistryType;
    status?: ContractRegistryStatus;
    signatureDateFrom?: string;
    signatureDateTo?: string;
};

export type ClientsListFormType = ContractsHubPagination & {
    search?: string;
    projectId?: string;
    unitTypeId?: string;
    status?: ClientRegistryStatus;
    valueMin?: number;
    valueMax?: number;
};
