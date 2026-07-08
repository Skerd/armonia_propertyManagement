import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export function markRentalPaymentPaidFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        paidAmount: z.number().min(0).optional(),
        paidDate: z.string().optional(),
        notes: z.string().optional(),
    });
}
