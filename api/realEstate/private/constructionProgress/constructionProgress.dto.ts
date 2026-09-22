import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {ConstructionPhase} from "./constructionProgress.constants";

export type ConstructionProgress = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: {
        _id: string;
        name: string;
    };
    edifice?: {
        _id: string;
        name: string;
    };
    phase: ConstructionPhase;
    progressPercent: number;
    updateDate: string;
    title: string;
    description?: string;
    expectedCompletionDate?: string;
    photos?: Media[];
    notifyClients?: boolean;
    /** Last time clients were notified (automatic or resend). */
    clientsNotifiedAt?: string;
    clientsNotifiedCount?: number;
};
