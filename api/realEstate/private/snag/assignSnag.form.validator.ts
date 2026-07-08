import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function assignSnagFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        assignedTo: isObjectIdZod(form?.["assignedToLabel"] ?? "assignedTo", languageCode),
    });
}
