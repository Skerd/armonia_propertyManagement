import z from "zod";
import {isObjectIdZod, stringMinMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {UNIT_LONG_TEXT_MAX} from "./unit.schema-def";

export function markUnavailableFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        unavailableNotes: stringMinMaxLengthZod(
            form?.["unavailableNotesLabel"] || "unavailableNotes",
            1,
            UNIT_LONG_TEXT_MAX,
            languageCode,
        ),
    });
}
