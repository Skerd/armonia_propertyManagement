import {z} from "zod";
import {greaterThanZod, isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LEASE_LONG_TEXT_MAX} from "./lease.schema-def";

export function recordRentPaymentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        paidAmount: greaterThanZod(form?.["paidAmountLabel"] ?? "paidAmount", 0, languageCode),
        paidDate: z.string().optional(),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] ?? "notes",
            LEASE_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
