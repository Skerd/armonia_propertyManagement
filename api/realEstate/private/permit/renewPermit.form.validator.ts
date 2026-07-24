import {z} from "zod";
import {isObjectIdZod, notEmptyZod, parsableDateStringZod} from "../../../../../core/helpers/zodBuilder";

export function renewPermitFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id:       isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        expiresAt: parsableDateStringZod(form?.["expiresAtLabel"] ?? "expiresAt", languageCode),
        notes:     notEmptyZod(form?.["notesLabel"] ?? "notes", languageCode).optional(),
    });
}
