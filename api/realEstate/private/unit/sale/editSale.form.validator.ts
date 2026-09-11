import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {SALE_LONG_TEXT_MAX, SALE_SHORT_TEXT_MAX} from "./sale.schema-def";

export function editSaleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id:                  isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        notes:                stringMaxLengthZod(form?.["notesLabel"] || "notes", SALE_LONG_TEXT_MAX, languageCode).optional().nullable(),
        transactionReference: stringMaxLengthZod(form?.["transactionReferenceLabel"] || "transactionReference", SALE_SHORT_TEXT_MAX, languageCode).optional().nullable(),
    });
}
