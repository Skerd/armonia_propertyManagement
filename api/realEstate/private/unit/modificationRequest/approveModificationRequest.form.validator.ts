import {z} from "zod";
import {
    greaterThanZod,
    isArrayOfObjectIdsZod,
    isEnumZod,
    isObjectIdZod,
    stringMaxLengthZod,
    stringMinMaxLengthZod,
} from "../../../../../../core/helpers/zodBuilder";
import {
    MODIFICATION_REQUEST_LINE_ITEM_MAX,
    MODIFICATION_REQUEST_LONG_TEXT_MAX,
    MODIFICATION_REQUEST_UNIT_MAX,
} from "./modificationRequest.schema-def";

const validStages = ["architect", "engineer", "ceo"];
const validDecisions = ["approved", "rejected"];
const validRejectReasons = ["design", "technical", "budget", "other"];

export function approveModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        stage: isEnumZod(form?.["stageLabel"] || "stage", validStages, validStages.map((stage) => form?.["stageEnum"]?.[stage] ?? stage ).join(", "), languageCode),
        decision: isEnumZod(form?.["decisionLabel"] || "decision", validDecisions, validDecisions.map((stage) => form?.["decisionEnum"]?.[stage] ?? stage ).join(", "), languageCode),
        notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
        rejectReasonCode: isEnumZod(form?.["rejectReasonCodeLabel"] || "rejectReasonCode", validRejectReasons, validRejectReasons.map((stage) => form?.["rejectReasonCodeEnum"]?.[stage] ?? stage ).join(", "), languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),

        materialsPlan: z.array(z.object({
            item: stringMinMaxLengthZod(form?.["materialsPlan"]?.["itemLabel"] || "item", 1, MODIFICATION_REQUEST_LINE_ITEM_MAX, languageCode),
            quantity: greaterThanZod(form?.["materialsPlan"]?.["quantityLabel"] || "quantity", 0, languageCode).optional(),
            unit: stringMaxLengthZod(form?.["materialsPlan"]?.["unitLabel"] || "unit", MODIFICATION_REQUEST_UNIT_MAX, languageCode).optional(),
            notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
        })).optional()
    });
}
