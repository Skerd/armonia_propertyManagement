import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Freigabeprozess config (§3.J) — BOUNDED to finance/construction document types.
export const approvalDocumentTypeValues = [
    "budget",
    "cost_estimate",
    "contract",
    "variation_order",
    "contractor_invoice",
    "progress_claim",
] as const;
export type ApprovalDocumentTypeValue = typeof approvalDocumentTypeValues[number];

// A bounded 2-stage workflow: a primary approver role, plus an escalation role
// that becomes required once the document amount reaches thresholdAmount
// ("ab einer gewissen Betragssumme zusätzlich vom Geschäftsführer").
export const ApprovalWorkflowSchemaDef = {
    documentType:      {type: "enum", required: true, options: approvalDocumentTypeValues},
    title:             {type: "string", required: true},
    approverRole:      {type: "string", required: false},
    thresholdAmount:   {type: "number", required: false},
    thresholdCurrency: {type: "objectId", required: false},
    escalationRole:    {type: "string", required: false},
    active:            {type: "boolean", required: false},
    notes:             {type: "string", required: false},
} as const;

export type CreateApprovalWorkflowFormType = InferCreateForm<typeof ApprovalWorkflowSchemaDef>;
export type EditApprovalWorkflowFormType = InferEditForm<typeof ApprovalWorkflowSchemaDef>;
