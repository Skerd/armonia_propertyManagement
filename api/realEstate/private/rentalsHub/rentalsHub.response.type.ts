import type {LeaseRegistryRow} from "./rentalsHub.lease.dto";
import type {RentalPaymentRegistryRow} from "./rentalsHub.payment.dto";
import type {RevenueByCurrency} from "../dashboard/dashboard.form.response.type";

export type LeasesListResponseType = {
    data: LeaseRegistryRow[];
    total: number;
    page: number;
    limit: number;
};

export type RentalPaymentsListResponseType = {
    data: RentalPaymentRegistryRow[];
    total: number;
    page: number;
    limit: number;
};

export type RentalsCalendarResponseType = {
    month: string;
    truncated: boolean;
    payments: RentalPaymentRegistryRow[];
    kpis: {
        collectedAmount: RevenueByCurrency[];
        outstandingAmount: RevenueByCurrency[];
        overdueAmount: RevenueByCurrency[];
    };
};
