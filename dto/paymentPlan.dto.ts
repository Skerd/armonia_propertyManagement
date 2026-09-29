export type PaymentPlanSimple = {
    _id: string;
    name: string;
};

export type PaymentPlanDetail = {
    _id: string;
    name: string;
    status?: string;
    totalAmount?: number;
    remainingBalance?: number;
    installments?: {
        installmentNumber?: number;
        dueDate?: string;
        amount?: number;
        principalAmount?: number;
        interestAmount?: number;
        status?: string;
        paidAmount?: number;
        paidDate?: string;
        transactionId?: string;
        notes?: string;
    }[];
};
