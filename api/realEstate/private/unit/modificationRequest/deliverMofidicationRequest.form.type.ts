
export type DeliverModificationRequestFormType = {
    _id: string;                     // Required: Request ID
    notes?: string;                  // Optional: Delivery notes
    inspections?: string[];          // Optional: Array of inspection IDs to link
    media?: string[];                // Optional: Delivery evidences
}