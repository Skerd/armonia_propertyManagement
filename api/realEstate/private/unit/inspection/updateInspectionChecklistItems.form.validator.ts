import {z} from "zod";
import {isBooleanZod, isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

export function updateInspectionChecklistItemsFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        items: z.array(z.object({
            _id: isObjectIdZod(form?.["itemIdLabel"] ?? "_id", languageCode),
            completed: isBooleanZod(form?.["completedLabel"] ?? "completed", languageCode),
        })).min(1),
    });
}
