import {TableForm} from "../../../../../../core/types/shared.types";

export type ModificationRequestFormType = TableForm & {
    unit?: string;
    project?: string;
    edifice?: string;
    floor?: string;
};
