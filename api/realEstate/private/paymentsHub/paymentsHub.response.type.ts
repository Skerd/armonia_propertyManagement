import type {PaymentsHubPeriodRow, PaymentsHubRow} from "./paymentsHub.dto";
import type {PaymentsHubGroupBy} from "./paymentsHub.constants";
import type {RevenueByCurrency} from "../dashboard/dashboard.form.response.type";

/** Totals over every row the filters matched, not just the page on screen. */
export type PaymentsHubTotals = {
    expectedAmount: RevenueByCurrency[];
    paidAmount: RevenueByCurrency[];
    outstandingAmount: RevenueByCurrency[];
};

export type PaymentsListResponseType = {
    data: PaymentsHubRow[];
    total: number;
    page: number;
    limit: number;
    totals: PaymentsHubTotals;
    /** True when the company has more plans than the scan cap, so totals are partial. */
    truncated: boolean;
};

export type PaymentsCalendarResponseType = {
    month: string;
    truncated: boolean;
    payments: PaymentsHubRow[];
};

export type PaymentsSummaryResponseType = {
    groupBy: PaymentsHubGroupBy;
    /** Fixed windows, independent of the list's date range. */
    kpis: {
        overdueAmount: RevenueByCurrency[];
        dueNext7DaysAmount: RevenueByCurrency[];
        dueNext30DaysAmount: RevenueByCurrency[];
        collectedThisMonthAmount: RevenueByCurrency[];
    };
    periods: PaymentsHubPeriodRow[];
    truncated: boolean;
};
