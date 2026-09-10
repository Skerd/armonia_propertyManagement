import {z} from "zod";
import {isObjectIdZod, mustBeZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {COMMISSION_LONG_TEXT_MAX} from "./commission.schema-def";

export function approveCommissionPaymentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        decision: mustBeZod(
            form?.["decisionLabel"] || "decision",
            ["approved", "rejected"],
            languageCode,
        ),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] || "notes",
            COMMISSION_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
