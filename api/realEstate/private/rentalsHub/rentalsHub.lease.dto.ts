import type {LeaseRegistryStatus} from "./rentalsHub.constants";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type LeaseRegistryRow = {
    _id: string;
    name?: string;
    status: LeaseRegistryStatus;
    startDate?: string;
    endDate?: string;
    monthlyRent?: number;
    collectedAmount?: number;
    outstandingAmount?: number;
    currency?: CurrencySimple;
    depositAmount?: number;
    depositPaid?: boolean;
    tenant?: SimpleBlankUser & {email?: string};
    unit?: UnitSimple;
    project?: ProjectSimple;
    createdAt?: string;
};
