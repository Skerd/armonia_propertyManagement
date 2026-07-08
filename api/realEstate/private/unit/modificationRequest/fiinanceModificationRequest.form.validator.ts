import {z} from "zod";
import {
    greaterThanOrEqualZod,
    isArrayOfObjectIdsZod,
    isObjectIdZod,
    notEmptyZod, notInThePastZod
} from "../../../../../../core/helpers/zodBuilder";

export function financeModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        totalCost: greaterThanOrEqualZod(form?.["totalCostLabel"] || "totalCost", 0, languageCode),
        currency: isObjectIdZod(form?.["currencyLabel"] || "currency", languageCode),
        costBreakdown: z.array(z.object({
            item: notEmptyZod(form?.["itemLabel"] || "item", languageCode),
            cost: z.union([
                greaterThanOrEqualZod(form?.["costLabel"] || "cost", 0, languageCode),
                z.undefined()
            ]),
            quantity: z.union([
                greaterThanOrEqualZod(form?.["quantityLabel"] || "quantity", 0, languageCode),
                z.undefined()
            ]),
            unit: z.string().optional()
        })).optional(),
        notes: notEmptyZod(form?.["notesLabel"] ?? "notes", languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),
        estimatedCompletionDate: notInThePastZod(form?.["estimatedCompletionDateLabel"] || "estimatedCompletionDate", "UTC", languageCode).optional(),
    });
}