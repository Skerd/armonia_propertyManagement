import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
export type BimQuantity = OwnershipData & DeletedData & LifeCycleData & {
    _id: string; name?: string;
    bimModel: {_id: string; title?: string} | string;
    ifcElementType?: string; classificationCode?: string; quantity?: number; unitOfMeasure?: string; notes?: string;
};
