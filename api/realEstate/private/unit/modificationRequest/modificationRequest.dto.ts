import {Media} from "../../../../../../core/types";
import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import {Currency} from "../../../../../../core/database/types";

export type ApprovalStage = {
    decision: string;                // approved, rejected, pending
    user?: {
        _id: string;
        name?: string;
        surname?: string;
    };
    notes?: string;
    reviewedAt?: string;
    media?: Media[];
    materialsPlan?: {
        item: string;
        quantity?: number;
        unit?: string;
        notes?: string;
        pricePerUnit?: number;
        currency?: Currency;
    }[];
    inspections?: {_id: string; name?: string}[];
}

export type CostBreakdownItem = {
    item?: string;
    cost?: number;
    quantity?: number;
    unit?: string;
    source?: "engineer_material" | "manual";
}

export type FinanceStageDetails = {
    totalCost?: number;
    currency?: Currency;
    costBreakdown?: CostBreakdownItem[];
    media?: Media[];
    notes?: string;
    estimatedCompletionDate?: string;
}

export type ModificationRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
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
    requestedBy?: {
        _id: string;
        name?: string;
        surname?: string;
    };
    title?: string;
    description?: string;
    constructionType?: string;
    specifications?: string;
    status?: string;
    architectApproval?: ApprovalStage;
    engineerApproval: ApprovalStage;
    ceoApproval: ApprovalStage;
    financeDetails?: FinanceStageDetails;
    clientCostApproval?: ApprovalStage;
    stageDueDate?: string;
    clientNotifiedAt?: string;
    notificationSent?: boolean;
    submittedAt?: string;
    deliveryApproval: ApprovalStage;
    inspections?: {_id: string, name?: string}[];
    completedAt?: string;
    cancelledAt?: string;
    cancellationReason?: string;
}
