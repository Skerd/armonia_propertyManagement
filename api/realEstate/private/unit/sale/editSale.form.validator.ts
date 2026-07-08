import {z} from "zod";
import {isObjectIdZod} from "../../../../../../core/helpers/zodBuilder";

export function editSaleFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id:                   isObjectIdZod(form?.["_idLabel"] || "_id", languageCode),
        notes:                 z.any().optional(),
        transactionReference:  z.any().optional(),
        // FEAT-004 — handover tracking
        handoverDate:          z.string().optional().nullable(),
        handedOverBy:          z.string().optional().nullable(),
        handoverNotes:         z.string().optional().nullable(),
        // FEAT-014 — title transfer tracking
        titleTransferDate:     z.string().optional().nullable(),
        deedNumber:            z.string().optional().nullable(),
        notaryName:            z.string().optional().nullable(),
    });
}
