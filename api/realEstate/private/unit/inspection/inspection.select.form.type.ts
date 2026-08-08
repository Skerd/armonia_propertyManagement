import {SelectForm} from "../../../../../../core/types/shared.types";

export type InspectionSelectFormType = SelectForm & {
    unit?: string;
    notId?: string;
    followUp?: boolean;
};
