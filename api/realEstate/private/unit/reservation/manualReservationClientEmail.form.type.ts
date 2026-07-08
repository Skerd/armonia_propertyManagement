export const MANUAL_RESERVATION_CLIENT_EMAIL_ACTIONS = [
    "remind_3d",
    "remind_1d",
    "remind_today",
    "remind_remaining_days",
    "send_expired",
    "send_confirmation",
] as const;

export type ManualReservationClientEmailAction = (typeof MANUAL_RESERVATION_CLIENT_EMAIL_ACTIONS)[number];

export type ManualReservationClientEmailForm = {
    _id: string;
    action: ManualReservationClientEmailAction;
};
