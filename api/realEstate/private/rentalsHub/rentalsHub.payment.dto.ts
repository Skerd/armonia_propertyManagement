import type {RentalPaymentRegistryStatus} from "./rentalsHub.constants";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {LeaseSimple} from "../../../../dto/lease.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type RentalPaymentRegistryRow = {
    _id: string;
    name?: string;
    status: RentalPaymentRegistryStatus;
    dueDate?: string;
    amount?: number;
    paidAmount?: number;
    remaining?: number;
    lateFeeAmount?: number;
    paidDate?: string;
    currency?: CurrencySimple;
    lease?: LeaseSimple;
    tenant?: SimpleBlankUser;
    unit?: UnitSimple;
    project?: ProjectSimple;
    createdAt?: string;
};
