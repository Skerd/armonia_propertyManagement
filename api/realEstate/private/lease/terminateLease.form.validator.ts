import {z} from "zod";
import {isObjectIdZod, notEmptyZod} from "../../../../../core/helpers/zodBuilder";

export function terminateLeaseFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        terminationReason: notEmptyZod(form?.["terminationReasonLabel"] ?? "terminationReason", languageCode, true),
        terminationDate: z.string().optional(),
    });
}
