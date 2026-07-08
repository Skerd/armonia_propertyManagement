export const CONTRACT_REGISTRY_TYPE_VALUES = ["reservation", "cash_sale", "payment_plan_sale"] as const;
export type ContractRegistryType = (typeof CONTRACT_REGISTRY_TYPE_VALUES)[number];

export const CONTRACT_REGISTRY_STATUS_VALUES = ["active", "expired", "cancelled", "sold"] as const;
export type ContractRegistryStatus = (typeof CONTRACT_REGISTRY_STATUS_VALUES)[number];

export const CONTRACT_PAYMENT_STATUS_VALUES = ["ok", "partially", "unpaid", "no_payments"] as const;
export type ContractPaymentStatus = (typeof CONTRACT_PAYMENT_STATUS_VALUES)[number];

export const CLIENT_REGISTRY_STATUS_VALUES = ["sold", "reserved"] as const;
export type ClientRegistryStatus = (typeof CLIENT_REGISTRY_STATUS_VALUES)[number];

export const CONTRACTS_HUB_SOURCE_TYPE_VALUES = ["sale", "reservation"] as const;
export type ContractsHubSourceType = (typeof CONTRACTS_HUB_SOURCE_TYPE_VALUES)[number];
