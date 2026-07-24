/**
 * costControl — Baukostenkontrolle read-model (§3.I).
 * Cost-control ledger per project over the BKP account plan:
 * estimated → committed → invoiced → certified → paid → variance.
 */

export type CostControlRow = {
    bkpCode: string;
    title?: string;
    estimated: number;
    invoiced: number;
    paid: number;
    variance: number; // estimated - invoiced
};

export type CostControlResponse = {
    projectId?: string;
    projectName?: string;
    groupBy: string;
    rows: CostControlRow[];
    totals: {
        estimated: number;
        committed: number;
        invoiced: number;
        certified: number;
        paid: number;
        variance: number;
    };
    computedAt: string;
};
