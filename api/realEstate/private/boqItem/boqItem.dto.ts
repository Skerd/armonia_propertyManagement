import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type BoqItem = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    budget: {_id: string; name?: string; title?: string}; constructorRef?: {_id: string; name?: string}; classificationStandard?: string; classificationCode?: string; elementCode?: string; wbsCode?: string; trade?: string; category?: string; unitOfMeasure?: string; plannedQty?: number; plannedRate?: number; plannedAmount?: number; actualQty?: number; actualAmount?: number; currency: {_id: string; name?: string; symbol?: string};
};
