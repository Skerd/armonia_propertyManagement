import { z } from "zod";
import {
    greaterThanOrEqualZod,
    inBetweenRangeZod,
    isObjectIdZod,
} from "../../../../../core/helpers/zodBuilder";

export function dashboardFormSchema(languageCode: string, form: any = null) {
    return z.object({
        from: z.string().optional(),
        to: z.string().optional(),
        period: z.enum(["week", "month"]).optional(),
        recentSalesLimit: z.union([
            inBetweenRangeZod(form?.["recentSalesLimitLabel"] ?? "recentSalesLimit", 1, 50, languageCode),
            z.undefined(),
        ]),
        projectId: isObjectIdZod(form?.["projectIdLabel"] ?? "projectId", languageCode).optional(),
        edificeId: isObjectIdZod(form?.["edificeIdLabel"] ?? "edificeId", languageCode).optional(),
    });
}
