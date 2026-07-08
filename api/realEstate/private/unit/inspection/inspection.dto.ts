import type {Media} from "../../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";

export type InspectionFindingItem = {
    notes: string;
    media: Media[];
    severity?: string;
    resolvedAt?: string;
    resolvedBy?: {_id: string; name?: string; surname?: string};
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

export type Inspection = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    unit: {
        _id: string;
        name?: string;
        unitNumber?: string;
        unitType?: {
            _id: string;
            name?: string;
            icon?: string;
        };
        floor?: {
            _id: string;
            name?: string;
            edifice?: {
                _id: string;
                name?: string;
                project?: {
                    _id?: string;
                    name?: string;
                };
            };
        };
    };
    inspectedBy: {
        _id: string;
        name?: string;
        surname?: string;
    };
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
    followUpInspection?: {
        _id: string;
        name?: string;
    };
    followedUpByInspection?: {
        _id: string;
        name?: string;
    };
    completedAt?: string;
    cancelledAt?: string;
    cancellationReason?: string;
    clientSignatureMediaId?: {_id: string; url?: string; name?: string;};
    clientSignedAt?: string;
};
