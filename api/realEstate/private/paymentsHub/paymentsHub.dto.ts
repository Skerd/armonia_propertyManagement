import type {PaymentsHubKind, PaymentsHubStatus} from "./paymentsHub.constants";
import type {RevenueByCurrency} from "../dashboard/dashboard.form.response.type";

/** One payment-plan money movement, flattened out of the plan it belongs to. */
export type PaymentsHubRow = {
    /** Stable row key: `${planId}:${kind}:${installmentNumber ?? 0}`. Installments have no _id of their own. */
    _id: string;
    kind: PaymentsHubKind;
    /** Derived from the dates, not read from the stored installment status. */
    status: PaymentsHubStatus;
    planId: string;
    planCode?: string;
    saleId?: string;
    saleCode?: string;
    installmentNumber?: number;
    dueDate?: string;
    paidDate?: string;
    amount?: number;
    paidAmount?: number;
    remaining?: number;
    lateFeeAmount?: number;
    daysOverdue?: number;
    currency?: {_id: string; name?: string; symbol?: string; abbreviation?: string};
    /** The buyer. `companyName` is set instead of name/surname for company buyers. */
    client?: {_id?: string; name?: string; surname?: string; companyName?: string};
    unit?: {_id: string; name?: string; unitNumber?: string | number};
    project?: {_id: string; name?: string};
};

/** Totals for one grouping period, in one currency. */
export type PaymentsHubPeriodRow = {
    /** Start of the period, ISO, UTC. Also the row key. */
    periodStart: string;
    /** Last instant of the period, ISO, UTC. */
    periodEnd: string;
    count: number;
    expectedAmount: RevenueByCurrency[];
    paidAmount: RevenueByCurrency[];
    outstandingAmount: RevenueByCurrency[];
};
