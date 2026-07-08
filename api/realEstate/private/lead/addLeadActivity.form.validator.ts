import {z} from "zod";
import {isObjectIdZod, mustBeZod, notEmptyZod} from "../../../../../core/helpers/zodBuilder";
import {LEAD_ACTIVITY_ACTION_VALUES} from "./leadActivity.constants";

export function addLeadActivityFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        action: mustBeZod(form?.["actionLabel"] ?? "action", [...LEAD_ACTIVITY_ACTION_VALUES], languageCode),
        notes: notEmptyZod(form?.["notesLabel"] || "notes", languageCode).optional(),
    });
}
