import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LEASE_LONG_TEXT_MAX} from "./lease.schema-def";

export function terminateLeaseFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        terminationReason: stringMaxLengthZod(
            form?.["terminationReasonLabel"] ?? "terminationReason",
            LEASE_LONG_TEXT_MAX,
            languageCode,
        ).optional(),
        terminationDate: z.string().optional(),
    });
}
