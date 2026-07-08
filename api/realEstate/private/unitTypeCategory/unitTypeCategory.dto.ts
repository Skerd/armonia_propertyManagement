import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type UnitTypeCategory = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
};
