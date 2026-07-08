import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type UnitTypeCategorySimple = {
    _id: string;
    name: string;
};

export type UnitType = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    category?: UnitTypeCategorySimple;
    group: string;
    description: string;
    isPrivate: boolean;
    icon: string;
};
