import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type PropertyManagementConfigNotifyUser = {
    _id: string;
    name?: string;
    surname?: string;
};

export type PropertyManagementConfig = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    requiresSaleApproval?: boolean;
    requiresHandoverPackageForHandover?: boolean;
    notifyOnSales?: PropertyManagementConfigNotifyUser[];
    notifyOnReservations?: PropertyManagementConfigNotifyUser[];
};
