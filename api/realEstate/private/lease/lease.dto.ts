import type {Media} from "../../../../../core/types";
import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type Lease = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    unit?: UnitSimple;
    tenant?: SimpleBlankUser & {email?: string};
    startDate: string;
    endDate: string;
    monthlyRent: number;
    rentCurrency?: CurrencySimple;
    depositAmount?: number;
    lateFeePercentage?: number;
    gracePeriodDays?: number;
    depositPaid?: boolean;
    depositReturnedAt?: string;
    status?: string;
    terminationDate?: string;
    terminationReason?: string;
    notes?: string;
    contractMedia?: Media;
};
