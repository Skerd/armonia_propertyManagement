import {z} from "zod";
import {isEnumZod, isObjectIdZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {MODIFICATION_REQUEST_LONG_TEXT_MAX} from "./modificationRequest.schema-def";

const validDecisions = ["approved", "rejected"];

export function clientCostApproveModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        decision: isEnumZod(
            form?.["decisionLabel"] || "decision",
            validDecisions,
            validDecisions.map((d) => form?.["decisionEnum"]?.[d] ?? d).join(", "),
            languageCode,
        ),
        notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
    });
}
