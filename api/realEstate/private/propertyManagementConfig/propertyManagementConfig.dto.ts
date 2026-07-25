import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PropertyManagementConfig = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    requiresSaleApproval?: boolean;
    requiresHandoverPackageForHandover?: boolean;
};
