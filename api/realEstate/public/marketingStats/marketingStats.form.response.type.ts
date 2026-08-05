export type MarketingStatsCurrency = {
    symbol?: string;
    abbreviation?: string;
};

export type MarketingStatsFormResponseType = {
    /** Non-deleted projects for the marketing company. */
    totalProjects: number;
    /** Non-deleted units across those projects. */
    totalUnits: number;
    /** Sum of unit list prices (inventory / structured property value). */
    totalValue: number;
    /** Dominant currency among priced units (by value share). */
    valueCurrency?: MarketingStatsCurrency;
    /** Distinct sale buyers (co-owners / investors) for the company. */
    totalCoOwners: number;
};
