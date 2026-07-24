import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type SpecificationItem = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    specification: {_id: string; name?: string; title?: string; status?: string};
    project?: {_id: string; name?: string};
    title: string;
    npkChapter?: string;
    npkPosition?: string;
    isRPosition?: boolean;
    description?: string;
    unitOfMeasure?: string;
    quantity?: number;
    unitPrice?: number;
    lineTotal?: number;
    classificationStandard?: string;
    classificationCode?: string;
    currency: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    sortIndex?: number;
    notes?: string;
    status?: string;
};
