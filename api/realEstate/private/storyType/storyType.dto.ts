import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type StoryType = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    sortOrder?: number;
};
