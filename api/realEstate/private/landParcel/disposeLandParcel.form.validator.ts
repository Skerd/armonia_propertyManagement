import {z} from "zod";
import {isObjectIdZod, stringMaxLengthZod} from "../../../../../core/helpers/zodBuilder";
import {LAND_PARCEL_LONG_TEXT_MAX} from "./landParcel.schema-def";

export function disposeLandParcelFormSchema(languageCode: string, form: any = null) {
    return z.object({
        _id: isObjectIdZod(form?.["_idLabel"] ?? "_id", languageCode),
        disposeNotes: stringMaxLengthZod(form?.["disposeNotesLabel"] ?? "disposeNotes", LAND_PARCEL_LONG_TEXT_MAX, languageCode).optional(),
    });
}
