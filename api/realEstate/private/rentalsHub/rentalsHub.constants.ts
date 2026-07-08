export const LEASE_REGISTRY_STATUS_VALUES = ["active", "expired", "terminated"] as const;
export type LeaseRegistryStatus = (typeof LEASE_REGISTRY_STATUS_VALUES)[number];

export const RENTAL_PAYMENT_REGISTRY_STATUS_VALUES = ["pending", "paid", "overdue", "waived"] as const;
export type RentalPaymentRegistryStatus = (typeof RENTAL_PAYMENT_REGISTRY_STATUS_VALUES)[number];
