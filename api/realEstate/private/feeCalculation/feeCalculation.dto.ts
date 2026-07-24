import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";

export type FeeCalculation = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    consultantAppointment: {_id: string; title?: string} | string;
    basisAmount?: number;
    feePercent?: number;
    adjustmentFactor?: number;
    totalFee?: number;
    currency: {_id: string; abbreviation?: string};
    notes?: string;
    status?: string;
};
