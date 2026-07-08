import z from "zod";
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

export function manualReservationClientEmailFormSchema(
    languageCode: string | undefined,
    _form?: unknown,
    _sanitizedWriteFields?: unknown,
    _sanitizedReadFields?: unknown
) {
    const lang = languageCode ?? "en-US";
    return z.object({
        _id: isObjectIdZod("_id", lang),
        action: z.enum([
            "remind_3d",
            "remind_1d",
            "remind_today",
            "remind_remaining_days",
            "send_expired",
            "send_confirmation",
        ]),
    });
}
