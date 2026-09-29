import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";

export type PropertyManagementConfig = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    requiresSaleApproval?: boolean;
    requiresHandoverPackageForHandover?: boolean;
    notifyOnSales?: SimpleBlankUser[];
    notifyOnReservations?: SimpleBlankUser[];
};
