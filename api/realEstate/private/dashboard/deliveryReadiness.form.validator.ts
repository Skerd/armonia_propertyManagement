import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function deliveryReadinessFormSchema(languageCode: string, form: any = null) {
    return z.object({
        projectId: isObjectIdZod(form?.["projectIdLabel"] ?? "projectId", languageCode).optional(),
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] ?? "edificeId", languageCode).optional(),
    });
}
