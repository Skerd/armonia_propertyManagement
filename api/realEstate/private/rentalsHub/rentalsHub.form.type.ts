import type {LeaseRegistryStatus, RentalPaymentRegistryStatus} from "./rentalsHub.constants";

export type LeasesListFormType = {
    page?: number;
    limit?: number;
    search?: string;
    project?: string;
    edifice?: string;
    floor?: string;
    unit?: string;
    status?: LeaseRegistryStatus;
    startDateFrom?: string;
    startDateTo?: string;
};

export type RentalPaymentsListFormType = {
    page?: number;
    limit?: number;
    search?: string;
    project?: string;
    edifice?: string;
    floor?: string;
    unit?: string;
    status?: RentalPaymentRegistryStatus;
    dueDateFrom?: string;
    dueDateTo?: string;
};

export type RentalsCalendarFormType = {
    month: string;
    project?: string;
    edifice?: string;
    floor?: string;
    unit?: string;
};
