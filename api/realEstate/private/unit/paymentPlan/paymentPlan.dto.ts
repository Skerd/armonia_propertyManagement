import {DeletedData, LifeCycleData, OwnershipData} from "../../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../../core/dto/user.dto";
import type {SaleBlank} from "../../../../../dto/sale.dto";

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
    restructuredBy?: SimpleBlankUser;
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
    sale: SaleBlank;
    /** Denormalized from populated `sale.saleCurrency` for sheet money rows. */
    saleCurrency?: CurrencySimple;
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
