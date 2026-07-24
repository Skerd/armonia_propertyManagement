import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
export function pushToEstimateBimModelFormSchema(languageCode: string, form: any = null) {
    return z.object({_id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode), budgetId: z.string(), notes: z.string().optional()});
}
