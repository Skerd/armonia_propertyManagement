export type FinanceModificationRequestFormType = {
    _id: string;                     // Required: Request ID
    totalCost: number;               // Required: Total cost
    currency: string;                // Required: Currency ID
    costBreakdown?: {                // Optional: Cost breakdown
        item: string;
        cost: number;
        quantity?: number;
        unit?: string;
    }[];
    media?: string[];               // Optional: Media IDs (invoices, quotes, etc.)
    notes?: string;                 // Optional: Finance notes
    estimatedCompletionDate?: string; // Optional: Estimated completion date (ISO string)
}