import type {
    ClientRegistryStatus,
    ContractRegistryStatus,
    ContractRegistryType,
} from "./contractsHub.constants";

export type ContractsHubPagination = {
    page?: number;
    limit?: number;
};

export type ContractsHubHierarchyFilters = {
    project?: string;
    edifice?: string;
    floor?: string;
    unit?: string;
};

export type ContractsListFormType = ContractsHubPagination &
    ContractsHubHierarchyFilters & {
        search?: string;
        contractType?: ContractRegistryType;
        status?: ContractRegistryStatus;
        signatureDateFrom?: string;
        signatureDateTo?: string;
    };

export type ClientsListFormType = ContractsHubPagination &
    ContractsHubHierarchyFilters & {
        search?: string;
        unitTypeId?: string;
        status?: ClientRegistryStatus;
        valueMin?: number;
        valueMax?: number;
    };
