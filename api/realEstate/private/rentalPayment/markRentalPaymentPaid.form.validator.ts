import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {RENTAL_PAYMENT_LONG_TEXT_MAX} from "./rentalPayment.schema-def";

export function markRentalPaymentPaidFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        paidAmount: z.number().min(0).optional(),
        paidDate: z.string().optional(),
        notes: stringMaxLengthZod(
            form?.["notesLabel"] ?? "notes",
            RENTAL_PAYMENT_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
