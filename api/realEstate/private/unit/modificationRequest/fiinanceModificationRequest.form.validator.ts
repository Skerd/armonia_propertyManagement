import {z} from "zod";
import {
    greaterThanOrEqualZod,
    isArrayOfObjectIdsZod,
    isObjectIdZod,
    notInThePastZod,
    stringMaxLengthZod,
    stringMinMaxLengthZod,
} from "../../../../../../core/helpers/zodBuilder";
import {
    MODIFICATION_REQUEST_LINE_ITEM_MAX,
    MODIFICATION_REQUEST_LONG_TEXT_MAX,
    MODIFICATION_REQUEST_UNIT_MAX,
} from "./modificationRequest.schema-def";

export function financeModificationRequestFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        totalCost: greaterThanOrEqualZod(form?.["totalCostLabel"] || "totalCost", 0, languageCode),
        currency: isObjectIdZod(form?.["currencyLabel"] || "currency", languageCode),
        costBreakdown: z.array(z.object({
            item: stringMinMaxLengthZod(form?.["itemLabel"] || "item", 1, MODIFICATION_REQUEST_LINE_ITEM_MAX, languageCode),
            cost: z.union([
                greaterThanOrEqualZod(form?.["costLabel"] || "cost", 0, languageCode),
                z.undefined()
            ]),
            quantity: z.union([
                greaterThanOrEqualZod(form?.["quantityLabel"] || "quantity", 0, languageCode),
                z.undefined()
            ]),
            unit: stringMaxLengthZod(form?.["unitLabel"] || "unit", MODIFICATION_REQUEST_UNIT_MAX, languageCode).optional(),
        })).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", MODIFICATION_REQUEST_LONG_TEXT_MAX, languageCode).optional(),
        media: isArrayOfObjectIdsZod(form?.["mediaLabel"] || "media", languageCode).optional(),
        estimatedCompletionDate: notInThePastZod(form?.["estimatedCompletionDateLabel"] || "estimatedCompletionDate", "UTC", languageCode).optional(),
    });
}
