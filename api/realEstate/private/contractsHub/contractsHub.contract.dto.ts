import type {
    ContractPaymentStatus,
    ContractRegistryStatus,
    ContractRegistryType,
    ContractsHubSourceType,
} from "./contractsHub.constants";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type ContractRegistryRow = {
    _id: string;
    sourceType: ContractsHubSourceType;
    sourceId: string;
    contractNumber?: string;
    client?: SimpleBlankUser;
    project?: ProjectSimple;
    unit?: UnitSimple;
    contractType: ContractRegistryType;
    status: ContractRegistryStatus;
    signatureDate?: string;
    uploadDate?: string;
    agent?: SimpleBlankUser;
    paymentStatus: ContractPaymentStatus;
};
