import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function marketingAvailabilityFormSchema(languageCode: string, form: any = null) {
    return z.object({
        projectId: isObjectIdZod(form?.["projectIdLabel"] ?? "projectId", languageCode),
        month: z.string().regex(/^\d{4}-\d{2}$/),
    });
}
