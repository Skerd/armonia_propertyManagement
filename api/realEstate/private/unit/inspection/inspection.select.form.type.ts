import {SelectForm} from "../../../../../../core/types/shared.types";

export type InspectionSelectFormType = SelectForm & {
    unitId?: string;
    notId?: string;
    followUp?: boolean;
}