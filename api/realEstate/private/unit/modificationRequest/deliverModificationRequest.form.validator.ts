import {z} from "zod";
import {
    isArrayOfObjectIdsZod,
    isObjectIdZod,
    stringMaxLengthZod,
} from "../../../../../../core/helpers/zodBuilder";
import {MODIFICATION_REQUEST_LONG_TEXT_MAX} from "./modificationRequest.schema-def";

export function deliverModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        inspections: isArrayOfObjectIdsZod(form?.["inspectionsLabel"] || "inspections", languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
    });
}