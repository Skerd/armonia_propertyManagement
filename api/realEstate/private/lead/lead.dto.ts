import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {CurrencySimple} from "../../../../../core/dto/currency.dto";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";

export type LeadActivityEntry = {
    _id: string;
    action: string;
    notes?: string;
    performedBy?: SimpleBlankUser;
    performedAt: string;
};

export type Lead = DeletedData & OwnershipData & LifeCycleData & {
    _id: string;
    name?: string;
    firstName: string;
    lastName?: string;
    email?: string;
    phone?: string;
    status?: string;
    source?: string;
    interest?: string;
    projectInterest?: ProjectSimple;
    unitInterest?: UnitSimple;
    budget?: number;
    budgetCurrency?: CurrencySimple;
    notes?: string;
    /** Linked public website chat (`Channel`), when the lead came from chat identify. */
    chat?: {_id: string; name?: string};
    assignedTo?: SimpleBlankUser;
    followUpDate?: string;
    convertedAt?: string;
    lostReason?: string;
    activityLog?: LeadActivityEntry[];
};
