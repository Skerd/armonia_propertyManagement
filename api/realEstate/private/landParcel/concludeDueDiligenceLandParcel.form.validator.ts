import {z} from "zod";
import {getValidationMessage, isObjectIdZod, mustBeZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {
    LAND_PARCEL_LONG_TEXT_MAX,
    LAND_PARCEL_SHORT_TEXT_MAX,
    landParcelConcludeDueDiligenceOutcomes,
} from "./landParcel.schema-def";

export function concludeDueDiligenceLandParcelFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        outcome: mustBeZod(form?.["outcomeLabel"] ?? "outcome", [...landParcelConcludeDueDiligenceOutcomes], languageCode,),
        cadastralReference: stringMaxLengthZod(form?.["cadastralReferenceLabel"] ?? "cadastralReference", LAND_PARCEL_SHORT_TEXT_MAX, languageCode,).optional(),
        acquisitionNotes: stringMaxLengthZod(form?.["acquisitionNotesLabel"] ?? "acquisitionNotes", LAND_PARCEL_LONG_TEXT_MAX, languageCode,).optional(),
        dueDiligenceStatus: stringMaxLengthZod(form?.["dueDiligenceStatusLabel"] ?? "dueDiligenceStatus", LAND_PARCEL_SHORT_TEXT_MAX, languageCode,).optional(),
        dueDiligenceNotes: stringMaxLengthZod(form?.["dueDiligenceNotesLabel"] ?? "dueDiligenceNotes", LAND_PARCEL_LONG_TEXT_MAX, languageCode,).optional(),
    }).superRefine((data, ctx) => {
        if (data.outcome === "approved" && !data.cadastralReference?.trim()) {
            ctx.addIssue({code: z.ZodIssueCode.custom, path: ["cadastralReference"], message: getValidationMessage("string", "notEmpty", [form?.["cadastralReferenceLabel"] ?? "cadastralReference"], languageCode,)});
        }
        if (data.outcome === "declined") {
            if (!data.dueDiligenceStatus?.trim()) {
                ctx.addIssue({code: z.ZodIssueCode.custom, path: ["dueDiligenceStatus"], message: getValidationMessage("string", "notEmpty", [form?.["dueDiligenceStatusLabel"] ?? "dueDiligenceStatus"], languageCode,)});
            }
        }
    });
}
