import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {validateSingleForm} from "../../../../../core/utilities/zod/shared.validator";
import {COMMISSION_LONG_TEXT_MAX} from "./commission.schema-def";

export function markCommissionPaidFormSchema(languageCode: string, form: any = null) {
    return validateSingleForm(languageCode, form).extend({
        paymentReference: stringMaxLengthZod(
            form?.["paymentReferenceLabel"] || "paymentReference",
            COMMISSION_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
        paymentReceiptMediaId: isObjectIdZod(
            form?.["paymentReceiptMediaIdLabel"] || "paymentReceiptMediaId",
            languageCode,
        ).optional(),
    });
}
