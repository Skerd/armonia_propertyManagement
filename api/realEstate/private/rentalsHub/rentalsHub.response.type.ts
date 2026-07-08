import type {LeaseRegistryRow} from "./rentalsHub.lease.dto";
import type {RentalPaymentRegistryRow} from "./rentalsHub.payment.dto";

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
