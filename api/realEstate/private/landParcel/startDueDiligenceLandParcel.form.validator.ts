import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LAND_PARCEL_LONG_TEXT_MAX, LAND_PARCEL_SHORT_TEXT_MAX} from "./landParcel.schema-def";

export function startDueDiligenceLandParcelFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        dueDiligenceStatus: stringMinMaxLengthZod(form?.["dueDiligenceStatusLabel"] ?? "dueDiligenceStatus", 1, LAND_PARCEL_SHORT_TEXT_MAX, languageCode),
        dueDiligenceNotes: stringMaxLengthZod(form?.["dueDiligenceNotesLabel"] ?? "dueDiligenceNotes", LAND_PARCEL_LONG_TEXT_MAX, languageCode).optional(),
    });
}
