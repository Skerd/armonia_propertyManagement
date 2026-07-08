import {z} from "zod";
import {
    greaterThanZod,
    isArrayOfObjectIdsZod,
    isEnumZod,
    isObjectIdZod,
    notEmptyZod
} from "../../../../../../core/helpers/zodBuilder";

const validStages = ["architect", "engineer", "ceo"];
const validDecisions = ["approved", "rejected"];
const validRejectReasons = ["design", "technical", "budget", "other"];

export function approveModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        stage: isEnumZod(form?.["stageLabel"] || "stage", validStages, validStages.map((stage) => form?.["stageEnum"]?.[stage] ?? stage ).join(", "), languageCode),
        decision: isEnumZod(form?.["decisionLabel"] || "decision", validDecisions, validDecisions.map((stage) => form?.["decisionEnum"]?.[stage] ?? stage ).join(", "), languageCode),
        notes: notEmptyZod(form?.["notesLabel"] || "notes", languageCode).optional(),
        rejectReasonCode: isEnumZod(form?.["rejectReasonCodeLabel"] || "rejectReasonCode", validRejectReasons, validRejectReasons.map((stage) => form?.["rejectReasonCodeEnum"]?.[stage] ?? stage ).join(", "), languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),

        materialsPlan: z.array(z.object({
            item: notEmptyZod(form?.["materialsPlan"]?.["itemLabel"] || "item", languageCode),
            quantity: greaterThanZod(form?.["materialsPlan"]?.["quantityLabel"] || "quantity", 0, languageCode).optional(),
            unit: notEmptyZod(form?.["materialsPlan"]?.["unitLabel"] || "unit", languageCode).optional(),
            notes:notEmptyZod(form?.["notesLabel"] || "notes", languageCode).optional(),
        })).optional()
    });
}