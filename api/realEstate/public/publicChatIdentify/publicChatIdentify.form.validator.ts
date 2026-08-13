import {z} from "zod";
import {
    greaterThanOrEqualZod,
    isEmailZod,
    isObjectIdZod,
    notEmptyZod,
    stringMaxLengthZod,
} from "../../../../../core/helpers/zodBuilder";

export type PublicChatIdentifyFormType = {
    name: string;
    email: string;
    phone: string;
    /** Optional free-text notes; stored on the lead as `notes`. */
    note?: string;
    budget?: number;
    /** Company Currency `_id` from `/api/finance/public/currencies`. */
    budgetCurrency?: string;
};

/** Same required contact surface as the public marketing forms; budget/currency/notes are optional. */
export function publicChatIdentifyFormSchema(languageCode: string, form: any = null) {
    return z.object({
        name: notEmptyZod(form?.["nameLabel"] || "name", languageCode).and(stringMaxLengthZod(form?.["nameLabel"] || "name", 120, languageCode)),
        email: isEmailZod(form?.["emailLabel"] || "email", languageCode),
        phone: notEmptyZod(form?.["phoneLabel"] || "phone", languageCode).and(stringMaxLengthZod(form?.["phoneLabel"] || "phone", 40, languageCode)),
        note: stringMaxLengthZod(form?.["noteLabel"] || "note", 500, languageCode).optional(),
        budget: greaterThanOrEqualZod(form?.["budgetLabel"] || "budget", 0, languageCode).optional(),
        budgetCurrency: isObjectIdZod(form?.["budgetCurrencyLabel"] || "budgetCurrency", languageCode).optional(),
    });
}
