import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";
import {approvalDocumentTypeValues} from "../approvalWorkflow/approvalWorkflow.schema-def";

export const approvalRequestStatusValues = ["pending", "approved", "rejected", "cancelled"] as const;
export type ApprovalRequestStatusValue = typeof approvalRequestStatusValues[number];

export const approvalRequestStageValues = ["primary", "escalation", "done"] as const;
export type ApprovalRequestStageValue = typeof approvalRequestStageValues[number];

export {approvalDocumentTypeValues};

// currentStage / primaryDecision / escalationDecision / status are server-managed by the @actions.
export const ApprovalRequestSchemaDef = {
    workflow:      {type: "objectId", required: false},
    documentType:  {type: "enum", required: true, options: approvalDocumentTypeValues},
    targetType:    {type: "string", required: true},
    targetId:      {type: "objectId", required: true},
    amount:        {type: "number", required: false},
    currency:      {type: "objectId", required: false},
    notes:         {type: "string", required: false},
} as const;

export type CreateApprovalRequestFormType = InferCreateForm<typeof ApprovalRequestSchemaDef>;
export type EditApprovalRequestFormType = InferEditForm<typeof ApprovalRequestSchemaDef>;
