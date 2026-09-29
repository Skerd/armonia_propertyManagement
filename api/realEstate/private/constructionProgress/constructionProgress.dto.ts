import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {EdificeSimple} from "../../../../dto/edifice.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {ConstructionPhase} from "./constructionProgress.constants";

export type ConstructionProgress = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: ProjectSimple;
    edifice?: EdificeSimple;
    phase: ConstructionPhase;
    progressPercent: number;
    updateDate: Date;
    title: string;
    description?: string;
    expectedCompletionDate?: Date;
    photos?: Media[];
    notifyClients?: boolean;
    /** Last time clients were notified (automatic or resend). */
    clientsNotifiedAt?: Date;
    clientsNotifiedCount?: number;
};
