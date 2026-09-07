import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod, stringMinMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LAND_PARCEL_LONG_TEXT_MAX, LAND_PARCEL_SHORT_TEXT_MAX} from "./landParcel.schema-def";

export function addDueDiligenceStepLandParcelFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        title: stringMinMaxLengthZod(form?.["titleLabel"] ?? "title", 1, LAND_PARCEL_SHORT_TEXT_MAX, languageCode,),
        notes: stringMaxLengthZod(form?.["notesLabel"] ?? "notes", LAND_PARCEL_LONG_TEXT_MAX, languageCode,).optional(),
    });
}
