import z from "zod";
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";
import {MANUAL_SALE_CLIENT_EMAIL_ACTIONS} from "./manualSaleClientEmail.form.type";

export function manualSaleClientEmailFormSchema(
    languageCode: string | undefined,
    _form?: unknown,
    _sanitizedWriteFields?: unknown,
    _sanitizedReadFields?: unknown
) {
    const lang = languageCode ?? "en-US";
    return z
        .object({
            _id: isObjectIdZod("_id", lang),
            action: z.enum(MANUAL_SALE_CLIENT_EMAIL_ACTIONS),
            installmentNumber: z.coerce.number().int().positive().optional(),
        })
        .refine(
            (data) => data.action === "send_sale_confirmation" || data.installmentNumber != null,
            {
                message: "installmentNumber is required for this action",
                path: ["installmentNumber"],
            }
        );
}
