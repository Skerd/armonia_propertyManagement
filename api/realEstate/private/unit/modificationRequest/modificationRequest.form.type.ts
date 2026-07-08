import {TableForm} from "../../../../../../core/types/shared.types";

export type ModificationRequestFormType = TableForm & {
    unitId?: string;                // Optional: Filter by unit ID
    projectId?: string;             // Optional: Filter by project ID
    edificeId?: string;             // Optional: Filter by edifice ID
    floorId?: string;               // Optional: Filter by floor ID
}