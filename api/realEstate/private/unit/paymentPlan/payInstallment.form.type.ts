export type PayInstallmentFormType = {
    _id: string;                     // Required: Payment plan ID
    installmentNumber: number;       // Required: Installment number to pay
    paidAmount: number;              // Required: Amount being paid
    transactionId?: string;          // Optional: Payment transaction ID
    notes?: string;                  // Optional: Payment notes
}
