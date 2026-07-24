import {z} from "zod";
import {isObjectIdZod, notEmptyZod, parsableDateStringZod} from "../../../../../core/helpers/zodBuilder";

export function approvePermitFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id:       isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        notes:     notEmptyZod(form?.["notesLabel"] ?? "notes", languageCode).optional(),
        expiresAt: parsableDateStringZod(form?.["expiresAtLabel"] ?? "expiresAt", languageCode).optional(),
    });
}
