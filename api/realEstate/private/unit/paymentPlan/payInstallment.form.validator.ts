import {greaterThanOrEqualZod, isObjectIdZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {SALE_LONG_TEXT_MAX, SALE_SHORT_TEXT_MAX} from "../sale/sale.schema-def";

export function payInstallmentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        paidAmount: greaterThanOrEqualZod(form?.["paidAmountLabel"] || "paidAmount", 0, languageCode),
        transactionId: stringMaxLengthZod(form?.["transactionIdLabel"] || "transactionId", SALE_SHORT_TEXT_MAX, languageCode).optional(),
        notes: stringMaxLengthZod(form?.["notesLabel"] || "notes", SALE_LONG_TEXT_MAX, languageCode).optional()
    });
}
