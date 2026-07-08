export const RESERVATION_SOURCE_VALUES = ["agent", "portal", "referral", "walk_in", "social", "other"] as const;
export type ReservationSource = (typeof RESERVATION_SOURCE_VALUES)[number];
