/** A hub row is either one payment-plan installment or the plan's down payment. */
export const PAYMENTS_HUB_KIND_VALUES = ["installment", "down_payment"] as const;
export type PaymentsHubKind = (typeof PAYMENTS_HUB_KIND_VALUES)[number];

/**
 * Status shown in the hub. Derived from the dates on read, never taken from the
 * stored installment status: the overdue cron runs once a day and a partial
 * payment overwrites an earlier `overdue`.
 */
export const PAYMENTS_HUB_STATUS_VALUES = ["pending", "partially_paid", "overdue", "paid", "cancelled"] as const;
export type PaymentsHubStatus = (typeof PAYMENTS_HUB_STATUS_VALUES)[number];

/** Which date the list filters and groups on. */
export const PAYMENTS_HUB_DATE_FIELD_VALUES = ["dueDate", "paidDate"] as const;
export type PaymentsHubDateField = (typeof PAYMENTS_HUB_DATE_FIELD_VALUES)[number];

export const PAYMENTS_HUB_GROUP_BY_VALUES = ["day", "week", "month"] as const;
export type PaymentsHubGroupBy = (typeof PAYMENTS_HUB_GROUP_BY_VALUES)[number];
