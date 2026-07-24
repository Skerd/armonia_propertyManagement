import {z} from "zod";
import {inBetweenRangeZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function updateProgressScheduleTaskFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        percentComplete: inBetweenRangeZod(form?.["percentCompleteLabel"] ?? "percentComplete", 0, 100, languageCode),
    });
}
