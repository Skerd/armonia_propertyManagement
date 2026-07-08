import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import {Currency} from "../../../../../../core/database/types";

export type PaymentPlanInstallment = {
    installmentNumber: number;
    dueDate: string;
    amount: number;
    principalAmount: number;
    interestAmount: number;
    status: string;
    paidAmount?: number;
    paidDate?: string;
    transactionId?: string;
    notes?: string;
    installmentReminderEmailAt3d?: string;
    installmentReminderEmailAt1d?: string;
    installmentReminderEmailAt0d?: string;
    installmentOverdueNoticeEmailAt?: string;
}

export type RestructureHistoryEntry = {
    restructuredAt: string;
    restructuredBy?: {_id: string; name?: string; surname?: string};
    reason?: string;
    previousNumberOfInstallments: number;
    previousStartDate: string;
    previousEndDate: string;
    previousInterestRate?: number;
    previousInstallments: PaymentPlanInstallment[];
};

export type PaymentPlan = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name: string;
    sale: {
        _id: string;
        name?: string;
    };
    /** Denormalized from populated `sale.saleCurrency` for sheet money rows. */
    saleCurrency?: Currency;
    status: string;
    totalAmount: number;
    downPayment: number;
    downPaymentPaid: boolean;
    downPaymentDate?: string;
    remainingBalance: number;
    numberOfInstallments: number;
    installmentAmount: number;
    interestRate?: number;
    startDate: string;
    endDate: string;
    installments: PaymentPlanInstallment[];
    gracePeriodDays?: number;
    lateFeePercentage?: number;
    notes?: string;
    restructureHistory?: RestructureHistoryEntry[];
}
