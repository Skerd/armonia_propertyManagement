import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function marketingUnitSingleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        projectId: isObjectIdZod(form?.["projectIdLabel"] ?? "projectId", languageCode),
        unitId: isObjectIdZod(form?.["unitIdLabel"] ?? "unitId", languageCode),
    });
}
