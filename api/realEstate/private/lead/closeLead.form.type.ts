export const LEAD_CLOSE_OUTCOMES = ["won", "lost"] as const;

export type LeadCloseOutcome = typeof LEAD_CLOSE_OUTCOMES[number];

export type CloseLeadForm = {
    _id: string;
    outcome: LeadCloseOutcome;
    notes?: string;
    lostReason?: string;
};
