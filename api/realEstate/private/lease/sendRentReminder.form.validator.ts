import {z} from "zod";
import {isObjectIdZod} from "../../../../../core/helpers/zodBuilder";

export const RENT_REMINDER_KINDS = ["3d", "1d", "0d", "overdue"] as const;
export type RentReminderKind = (typeof RENT_REMINDER_KINDS)[number];

export function sendRentReminderFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        rentalPaymentId: isObjectIdZod(form?.["rentalPaymentIdLabel"] ?? "rentalPaymentId", languageCode),
        kind: z.enum(RENT_REMINDER_KINDS),
    });
}
