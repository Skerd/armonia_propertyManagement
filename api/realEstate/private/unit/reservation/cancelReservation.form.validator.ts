import z from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {RESERVATION_LONG_TEXT_MAX} from "./reservation.schema-def";

export function cancelReservationFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        cancellationReason: stringMaxLengthZod(
            form?.["cancellationReasonLabel"] || "cancellationReason",
            RESERVATION_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
    });
}
