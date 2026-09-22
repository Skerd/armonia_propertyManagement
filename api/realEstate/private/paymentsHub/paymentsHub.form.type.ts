import type {
    PaymentsHubDateField,
    PaymentsHubGroupBy,
    PaymentsHubKind,
    PaymentsHubStatus,
} from "./paymentsHub.constants";

/** Filters shared by the list, calendar and summary endpoints. */
export type PaymentsHubScopeFormType = {
    search?: string;
    project?: string;
    edifice?: string;
    floor?: string;
    unit?: string;
    sale?: string;
    plan?: string;
    status?: PaymentsHubStatus;
    kind?: PaymentsHubKind;
};

export type PaymentsListFormType = PaymentsHubScopeFormType & {
    page?: number;
    limit?: number;
    /** Which date `dateFrom`/`dateTo` and the sort apply to. Defaults to `dueDate`. */
    dateField?: PaymentsHubDateField;
    dateFrom?: string;
    dateTo?: string;
    /** Sort direction on the chosen date. Defaults to `asc`, so the next payment is first. */
    sortOrder?: "asc" | "desc";
};

export type PaymentsCalendarFormType = PaymentsHubScopeFormType & {
    month: string;
};

export type PaymentsSummaryFormType = PaymentsHubScopeFormType & {
    groupBy?: PaymentsHubGroupBy;
    dateField?: PaymentsHubDateField;
    dateFrom?: string;
    dateTo?: string;
};
