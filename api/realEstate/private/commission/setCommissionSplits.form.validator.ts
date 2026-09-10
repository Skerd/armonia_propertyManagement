import {z} from "zod";
import {
    arrayMaxItemsZod,
    greaterThanOrEqualZod,
    inBetweenRangeZod,
    isObjectIdZod,
    stringMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";
import {COMMISSION_SPLIT_LABEL_MAX, COMMISSION_SPLITS_MAX} from "./commission.schema-def";

export function setCommissionSplitsFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        splits: arrayMaxItemsZod(
            form?.["splitsLabel"] || "splits",
            COMMISSION_SPLITS_MAX,
            languageCode,
            z.object({
                agentId: isObjectIdZod(form?.["agentIdLabel"] || "agentId", languageCode),
                label: stringMaxLengthZod(
                    form?.["labelLabel"] || "label",
                    COMMISSION_SPLIT_LABEL_MAX,
                    languageCode,
                ).optional(),
                ratePercent: inBetweenRangeZod(
                    form?.["ratePercentLabel"] || "ratePercent",
                    0,
                    100,
                    languageCode,
                ),
                amount: greaterThanOrEqualZod(form?.["amountLabel"] || "amount", 0, languageCode),
            }),
        ),
    });
}
