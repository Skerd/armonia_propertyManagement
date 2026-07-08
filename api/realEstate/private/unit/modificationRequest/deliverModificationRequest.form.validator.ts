import {z} from "zod";
import {
    isArrayOfObjectIdsZod,
    isObjectIdZod,
    notEmptyZod
} from "../../../../../../core/helpers/zodBuilder";

export function deliverModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        inspections: isArrayOfObjectIdsZod(form?.["inspectionsLabel"] || "inspections", languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),
        notes: notEmptyZod(form?.["notesLabel"] ?? "notes", languageCode).optional(),
    });
}