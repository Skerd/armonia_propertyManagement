import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {InspectionChecklistItemImportanceValue} from "./inspectionChecklistTemplate.schema-def";

export type InspectionChecklistTemplateItem = {
    _id?: string;
    name: string;
    description?: string;
    instructions?: string;
    importance?: InspectionChecklistItemImportanceValue;
};

export type InspectionChecklistTemplate = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    trade?: string;
    stage?: string;
    items: InspectionChecklistTemplateItem[];
};
