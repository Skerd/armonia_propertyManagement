import type {DeletedData, LifeCycleData, OwnershipData} from "../../../../../core/types/shared.types";
import type {Media} from "../../../../../core/types";
import type {SimpleBlankUser} from "../../../../../core/dto/user.dto";
import type {EdificeSimple} from "../../../../dto/edifice.dto";
import type {FloorSimple} from "../../../../dto/floor.dto";
import type {ProjectSimple} from "../../../../dto/project.dto";
import type {UnitSimple} from "../../../../dto/unit.dto";
import type {
    HandoverChecklistSourceScopeValue,
    HandoverConfigScopeValue,
    HandoverItemImportanceValue,
} from "./handoverPackage.schema-def";

export type HandoverPackageItem = {
    _id?: string;
    name: string;
    description?: string;
    instructions?: string;
    importance?: HandoverItemImportanceValue;
};

export type SaleHandoverChecklistItem = {
    _id?: string;
    sourcePackageId?: string;
    sourceItemId?: string;
    sourceScope: HandoverChecklistSourceScopeValue;
    name: string;
    description?: string;
    instructions?: string;
    importance?: HandoverItemImportanceValue;
    completed?: boolean;
    completedAt?: string;
    completedBy?: SimpleBlankUser;
    retained?: boolean;
};

export type HandoverPackage = OwnershipData & DeletedData & LifeCycleData & {
    _id: string;
    name?: string;
    project: ProjectSimple;
    edifice?: EdificeSimple;
    floor?: FloorSimple;
    unit?: UnitSimple;
    title: string;
    description?: string;
    notes?: string;
    scope: HandoverConfigScopeValue;
    items: HandoverPackageItem[];
    media?: Media[];
};
