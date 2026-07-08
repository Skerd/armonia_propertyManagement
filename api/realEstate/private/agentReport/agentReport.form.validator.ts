import {z} from "zod";
import {isArrayOfObjectIdsZod, isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function agentReportFormSchema(languageCode: string) {
    return z.object({
        dateFrom:  z.string().min(1),
        dateTo:    z.string().min(1),
        projectId: isObjectIdZod("projectId", languageCode).optional(),
        agentIds:  isArrayOfObjectIdsZod("agentIds", languageCode).optional(),
    });
}
