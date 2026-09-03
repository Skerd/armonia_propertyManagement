export type CreateCashSaleFormType = {
    project?: string;
    edifice?: string;
    floor?: string;
    unit: string;
    soldBy: string;
    saleDate: string;
    localDiscount?: number;
    saleCurrency: string;
    buyer: string;
    purchaseContract: string;
    additionalDocuments?: string[];
    notes?: string;
    transactionReference: string;
    reservationExchangeRate?: number;
    saleExchangeRate?: number;
    handoverDate?: string;
    handedOverBy?: string;
    handoverNotes?: string;
    handoverCertificate?: string;
    titleTransferDate?: string;
    deedNumber?: string;
    notaryName?: string;
    titleTransferCertificate?: string;
};

