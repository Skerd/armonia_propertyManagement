import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {SNAG_LONG_TEXT_MAX} from "./snag.schema-def";

export function finishWorkingSnagFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] ?? "notes",
            SNAG_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
