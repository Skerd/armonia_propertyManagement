import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {ReservationSchemaDef} from "./reservation.schema-def";

export function createReservationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ReservationSchemaDef, languageCode, form);
}
