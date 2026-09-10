import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LEAD_LONG_TEXT_MAX} from "./lead.schema-def";

export function leadTransitionFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] || "notes",
            LEAD_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
