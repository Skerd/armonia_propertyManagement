export type DeliveryReadinessDomain = {
    /** stable id: permits | requiredDeliverables | designStages | milestones | snags | handoverPackages */
    key: string;
    done: number;
    total: number;
    /** done/total as 0–100, null when total is 0 (domain not in use). */
    percent: number | null;
};

export type DeliveryReadinessFormResponseType = {
    /** Mean of the percents of domains that are in use (total > 0); null when none are. */
    overallScore: number | null;
    domains: DeliveryReadinessDomain[];
};
