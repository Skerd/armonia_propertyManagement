import {z} from "zod";
import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {dateBeforeFieldZod} from "../../../../../../core/helpers/zodBuilder";
import {ReservationSchemaDef} from "./reservation.schema-def";

export function createReservationFormSchema(languageCode: string, form: any = null) {
    return dateBeforeFieldZod(
        "reservationDate",
        "expirationDate",
        languageCode,
        {
            dateField: form?.["reservationDateLabel"] || "reservationDate",
            otherField: form?.["expirationDateLabel"] || "expirationDate",
        },
    )(buildCreateZodSchema(ReservationSchemaDef, languageCode, form) as z.ZodObject<any>) as z.ZodObject<any>;
}
