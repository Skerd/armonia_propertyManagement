import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {UnitTypeCategorySimple} from "../../../../dto/unitTypeCategory.dto";

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
