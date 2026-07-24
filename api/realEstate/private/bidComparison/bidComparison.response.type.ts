/**
 * bidComparison — Angebotsvergleich read-model (§3.E).
 * Ranks the bids on a tender by a weighted score over price, contractor quality
 * and completeness (how much of the LV was priced).
 */

export type BidComparisonRow = {
    bidId: string;
    bidName?: string;
    constructorId?: string;
    constructorName?: string;
    status?: string;
    total?: number;
    currencyAbbr?: string;
    linesPriced: number;
    linesTotal: number;
    priceScore: number;        // 0..100 (lowest total = 100)
    qualityScore: number;      // 0..100 (constructor performanceScore)
    completenessScore: number; // 0..100 (LV positions priced)
    overallScore: number;      // weighted
    recommended: boolean;
};

export type BidComparisonResponse = {
    tenderId?: string;
    tenderTitle?: string;
    specificationItemCount: number;
    weights: {price: number; quality: number; completeness: number};
    rows: BidComparisonRow[];
    recommendedBidId?: string;
    computedAt: string;
};
