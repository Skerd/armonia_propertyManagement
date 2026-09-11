import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";
import {RENT_REMINDER_KINDS} from "../lease/sendRentReminder.form.validator";

export function sendRentalPaymentReminderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        kind: z.enum(RENT_REMINDER_KINDS),
    });
}
