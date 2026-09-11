import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {
    HandoverChecklistSourceScopeValue,
    HandoverConfigScopeValue,
    HandoverItemImportanceValue,
} from "./handoverPackage.schema-def";

export type HandoverPackageItem = {
    _id?: string;
    name: string;
    description?: string;
    instructions?: string;
    importance?: HandoverItemImportanceValue;
};

export type SaleHandoverChecklistItem = {
    _id?: string;
    sourcePackageId?: string;
    sourceItemId?: string;
    sourceScope: HandoverChecklistSourceScopeValue;
    name: string;
    description?: string;
    instructions?: string;
    importance?: HandoverItemImportanceValue;
    completed?: boolean;
    completedAt?: string;
    completedBy?: {_id: string; name?: string; surname?: string};
    retained?: boolean;
};

export type HandoverPackage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    floor?: {_id: string; name: string};
    unit?: {_id: string; name?: string};
    title: string;
    description?: string;
    notes?: string;
    scope: HandoverConfigScopeValue;
    items: HandoverPackageItem[];
    media?: Media[];
};
