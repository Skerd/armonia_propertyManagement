import type {ClientRegistryRow} from "./contractsHub.client.dto";
import type {ContractRegistryRow} from "./contractsHub.contract.dto";

export type ContractsListResponseType = {
    data: ContractRegistryRow[];
    total: number;
    page: number;
    limit: number;
};

export type ClientsListResponseType = {
    data: ClientRegistryRow[];
    total: number;
    page: number;
    limit: number;
};
