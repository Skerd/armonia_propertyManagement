import {Media} from "../../../../../../core/types";
import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {InspectionSimple} from "../../../../../dto/inspection.dto";
import type {UnitWithFloor} from "../../../../../dto/unit.dto";

export type ApprovalStage = {
    decision: string;                // approved, rejected, pending
    user?: SimpleBlankUser;
    notes?: string;
    reviewedAt?: string;
    media?: Media[];
    materialsPlan?: {
        item: string;
        quantity?: number;
        unit?: string;
        notes?: string;
        pricePerUnit?: number;
        currency?: CurrencySimple;
    }[];
    inspections?: InspectionSimple[];
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
    currency?: CurrencySimple;
    costBreakdown?: CostBreakdownItem[];
    media?: Media[];
    notes?: string;
    estimatedCompletionDate?: string;
}

export type ModificationRequest = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    unit: UnitWithFloor;
    requestedBy?: SimpleBlankUser;
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
    inspections?: InspectionSimple[];
    completedAt?: string;
    cancelledAt?: string;
    cancellationReason?: string;
}
