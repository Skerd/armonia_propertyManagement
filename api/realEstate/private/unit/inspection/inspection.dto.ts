import type {Media} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {InspectionChecklistTemplateSimple} from "../../../../../dto/inspectionChecklistTemplate.dto";
import type {InspectionSimple} from "../../../../../dto/inspection.dto";
import type {UnitWithFloor} from "../../../../../dto/unit.dto";
import {
    InspectionChecklistItemImportanceValue
} from "../../inspectionChecklistTemplate/inspectionChecklistTemplate.schema-def";

export type InspectionFindingItem = {
    notes: string;
    media: Media[];
    severity?: string;
    resolvedAt?: string;
    resolvedBy?: SimpleBlankUser;
};

export type InspectionFindings = {
    structuralIssues?: InspectionFindingItem[];
    electricalIssues?: InspectionFindingItem[];
    plumbingIssues?: InspectionFindingItem[];
    hvacIssues?: InspectionFindingItem[];
    safetyConcerns?: InspectionFindingItem[];
    cosmeticIssues?: InspectionFindingItem[];
    otherObservations?: InspectionFindingItem[];
};

export type InspectionChecklistItem = {
    _id?: string;
    sourceTemplateId?: string;
    sourceItemId?: string;
    name: string;
    description?: string;
    instructions?: string;
    importance?: InspectionChecklistItemImportanceValue;
    completed?: boolean;
    completedAt?: string;
    completedBy?: SimpleBlankUser;
    retained?: boolean;
};

export type Inspection = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    unit: UnitWithFloor;
    inspectedBy: SimpleBlankUser;
    inspectionDate: string;
    scheduledDate?: string;
    type: string;
    status: string;
    notes?: string;
    findings?: InspectionFindings;
    rating?: number;
    media: Media[];
    nextInspectionDate?: string;
    followUpRequired: boolean;
    followUpRequiredOutstanding?: boolean;
    followUpInspection?: InspectionSimple;
    followedUpByInspection?: InspectionSimple;
    completedAt?: string;
    cancelledAt?: string;
    cancellationReason?: string;
    clientSignatureMediaId?: {_id: string; url?: string; name?: string};
    clientSignedAt?: string;
    checklistTemplate?: InspectionChecklistTemplateSimple;
    checklistItems?: InspectionChecklistItem[];
    checklistComplete?: boolean;
};
