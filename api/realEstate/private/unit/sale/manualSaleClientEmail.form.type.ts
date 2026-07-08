export const MANUAL_SALE_CLIENT_EMAIL_ACTIONS = [
    "send_sale_confirmation",
    "installment_remind_3d",
    "installment_remind_1d",
    "installment_remind_today",
    "installment_remind_remaining_days",
    "installment_send_overdue",
] as const;

export type ManualSaleClientEmailAction = (typeof MANUAL_SALE_CLIENT_EMAIL_ACTIONS)[number];

export type ManualSaleClientEmailForm = {
    _id: string;
    action: ManualSaleClientEmailAction;
    /** Required when action is an installment email. */
    installmentNumber?: number;
};
