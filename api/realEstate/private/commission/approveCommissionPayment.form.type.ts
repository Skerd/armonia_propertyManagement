export type ApproveCommissionPaymentDecision = "approved" | "rejected";

export type ApproveCommissionPaymentForm = {
    _id: string;
    decision: ApproveCommissionPaymentDecision;
    notes?: string;
};
