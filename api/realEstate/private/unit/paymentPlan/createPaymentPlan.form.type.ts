import {CreateCashSaleFormType} from "../sale/createSale.form.type";

export type PaymentPlanInstallmentFormType = {
    installmentNumber: number;
    dueDate: string;
    amount: number;
    principalAmount: number;
    interestAmount: number;
    interestRate?: number;
    gracePeriodDays?: number;
    lateFeePercentage?: number;
    notes?: string;
};

export type CreatePaymentPlanSaleFormType = CreateCashSaleFormType & {
    downPayment: number;
    interestRate: number;
    gracePeriodDays: number;
    lateFeePercentage: number;
    downPaymentPaid: boolean;
    downPaymentDate?: string;
    numberOfInstallments: number;
    startDate: string;
    endDate: string;
    installments: PaymentPlanInstallmentFormType[];
    /** Optional; persisted on the payment plan `notes` field (not sale notes). */
    paymentPlanNotes?: string;
};