export type EditSaleFormType = {
    _id: string;
    notes?: string;
    transactionReference?: string;
    // FEAT-004 — handover tracking
    handoverDate?: string | null;
    handedOverBy?: string | null;
    handoverNotes?: string | null;
    // FEAT-014 — title transfer tracking
    titleTransferDate?: string | null;
    deedNumber?: string | null;
    notaryName?: string | null;
};
