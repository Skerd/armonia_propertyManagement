
export type ApproveModificationRequestForm = {
    _id: string;                     // Required: Request ID
    stage: string;                   // Required: Approval stage (architect, engineer, ceo)
    decision: string;                // Required: Decision (approved, rejected)
    notes?: string;                  // Optional: Notes from approver
    rejectReasonCode?: "design" | "technical" | "budget" | "other";
    media?: string[];
    materialsPlan?: { item: string; quantity?: number; unit?: string; notes?: string }[];
}