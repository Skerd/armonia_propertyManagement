import {z} from "zod";
import {getValidationMessage, isObjectIdZod, mustBeZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LEAD_LONG_TEXT_MAX} from "./lead.schema-def";
import {LEAD_CLOSE_OUTCOMES} from "./closeLead.form.type";

export function closeLeadFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        outcome: mustBeZod(form?.["outcomeLabel"] || "outcome", [...LEAD_CLOSE_OUTCOMES], languageCode),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] || "notes",
            LEAD_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
        lostReason: stringMaxLengthZod(
            form?.["lostReasonLabel"] || "lostReason",
            LEAD_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    }).superRefine((data, ctx) => {
        if (data.outcome === "lost" && !data.lostReason?.trim()) {
            ctx.addIssue({
                code:    z.ZodIssueCode.custom,
                path:    ["lostReason"],
                message: getValidationMessage(
                    "string",
                    "notEmpty",
                    [form?.["lostReasonLabel"] || "lostReason"],
                    languageCode,
                ),
            });
        }
    });
}
