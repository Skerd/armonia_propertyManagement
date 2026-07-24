import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";

export type ConsultantAppointment = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {_id: string; name: string};
    edifice?: {_id: string; name: string};
    title: string;
    description?: string;
    notes?: string;
    status?: string;
    constructorRef: {_id: string; name?: string}; role: string; scope?: string; currency?: {_id: string; symbol?: string}; feeAmount?: number; feeModel?: string; basisKind?: string; adjustmentFactor?: number; hourlyRate?: number; cappedAmount?: number; startDate?: string; endDate?: string; deliverables?: string; media?: Media[];
};
