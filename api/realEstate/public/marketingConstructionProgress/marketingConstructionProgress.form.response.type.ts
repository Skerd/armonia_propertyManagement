export type MarketingMilestone = {
    id: string;
    title: string;
    status: string;
    plannedStart?: string;
    plannedEnd?: string;
    actualStart?: string;
    actualEnd?: string;
    weightPercent?: number;
};

export type MarketingConstructionUpdate = {
    id: string;
    title: string;
    description?: string;
    progressPercent: number;
    updateDate: string;
    photos: string[];
};

export type MarketingConstructionProgress = {
    /** Weighted milestone completion 0–100, or null when no milestones exist. */
    overallPercent: number | null;
    /** progressPercent of the most recent construction update, if any. */
    latestUpdatePercent: number | null;
    milestones: MarketingMilestone[];
    updates: MarketingConstructionUpdate[];
};

export type MarketingConstructionProgressFormResponseType = {
    progress: MarketingConstructionProgress;
};
