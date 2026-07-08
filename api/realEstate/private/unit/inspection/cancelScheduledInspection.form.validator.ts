import {z} from "zod";
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

export function cancelScheduledInspectionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        cancellationReason: z.string().optional(),
    });
}
