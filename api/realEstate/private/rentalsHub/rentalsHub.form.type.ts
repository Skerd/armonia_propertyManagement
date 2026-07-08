import type {LeaseRegistryStatus, RentalPaymentRegistryStatus} from "./rentalsHub.constants";

export type LeasesListFormType = {
    page?: number;
    limit?: number;
    search?: string;
    projectId?: string;
    status?: LeaseRegistryStatus;
    startDateFrom?: string;
    startDateTo?: string;
};

export type RentalPaymentsListFormType = {
    page?: number;
    limit?: number;
    search?: string;
    projectId?: string;
    status?: RentalPaymentRegistryStatus;
    dueDateFrom?: string;
    dueDateTo?: string;
};
