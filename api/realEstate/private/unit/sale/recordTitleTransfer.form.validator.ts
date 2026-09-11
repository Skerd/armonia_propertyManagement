import {z} from "zod";
import {isArrayOfFilesZod, isObjectIdZod, notInTheFutureZod, stringMaxLengthZod} from "../../../../../../core/helpers/zodBuilder";
import {SALE_SHORT_TEXT_MAX} from "./sale.schema-def";

export function recordTitleTransferFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        titleTransferDate: notInTheFutureZod(form?.["titleTransferDateLabel"] || "titleTransferDate", "UTC", languageCode),
        deedNumber: stringMaxLengthZod(form?.["deedNumberLabel"] || "deedNumber", SALE_SHORT_TEXT_MAX, languageCode).optional(),
        notaryName: stringMaxLengthZod(form?.["notaryNameLabel"] || "notaryName", SALE_SHORT_TEXT_MAX, languageCode).optional(),
        titleTransferCertificate: form
            ? isArrayOfFilesZod(form?.["titleTransferCertificateLabel"] || "titleTransferCertificate", languageCode).optional()
            : isObjectIdZod(form?.["titleTransferCertificateLabel"] || "titleTransferCertificate", languageCode).optional(),
    });
}
