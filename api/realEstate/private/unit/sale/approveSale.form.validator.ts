import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {SALE_LONG_TEXT_MAX} from "./sale.schema-def";

export function approveSaleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id:      isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        decision: z.enum(["approved", "rejected"]),
        notes:    stringMaxLengthZod(form?.["notesLabel"] || "notes", SALE_LONG_TEXT_MAX, languageCode).optional(),
    });
}
