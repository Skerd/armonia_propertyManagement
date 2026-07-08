import {z} from "zod";
import {isEnumZod, isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

const validStages = ["architect", "engineer"];

export function submitRevisionModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        targetStage: isEnumZod(form?.["targetStageLabel"] || "targetStage", validStages, validStages.map((stage) => form?.["targetStageEnum"]?.[stage] ?? stage ).join(", "), languageCode),
    });
}