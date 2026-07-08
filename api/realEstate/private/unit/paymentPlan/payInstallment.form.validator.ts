import {z} from 'zod';
import {greaterThanOrEqualZod, isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

export function payInstallmentFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        installmentNumber: greaterThanOrEqualZod(form?.["installmentNumberLabel"] || "installmentNumber", 1, languageCode),
        paidAmount: greaterThanOrEqualZod(form?.["paidAmountLabel"] || "paidAmount", 0, languageCode),
        transactionId: z.string().optional(),
        notes: z.string().optional()
    });
}
