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
};

