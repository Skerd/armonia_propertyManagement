import {z} from "zod";
import {isObjectIdZod, notEmptyZod} from "../../../../../core/helpers/zodBuilder";

export function finishWorkingSnagFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        notes: notEmptyZod(form?.["notesLabel"] ?? "notes", languageCode).optional(),
    });
}
