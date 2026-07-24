/**
 * estimateComparison — Kostenermittlung eBKP-H read-model.
 * Compares analogous cost elements (same classificationCode) across projects/edifices,
 * so a developer can benchmark "what did element C 2 cost on object A vs object B".
 */

export type EstimateComparisonEntry = {
    projectId: string;
    projectName: string;
    budgetId: string;
    budgetName?: string;
    budgetTitle?: string;
    edificeId?: string;
    edificeName?: string;
    plannedQty: number;
    plannedAmount: number;
    actualAmount: number;
};

export type EstimateComparisonRow = {
    classificationStandard: string;
    code: string;
    title?: string;
    unitOfMeasure?: string;
    occurrences: number;
    plannedAmountTotal: number;
    plannedAmountMin: number;
    plannedAmountMax: number;
    plannedAmountAvg: number;
    entries: EstimateComparisonEntry[];
};

export type EstimateComparisonResponse = {
    standard: string;
    rowCount: number;
    rows: EstimateComparisonRow[];
    computedAt: string;
};
