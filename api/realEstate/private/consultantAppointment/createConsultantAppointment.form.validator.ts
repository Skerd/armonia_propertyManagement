import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConsultantAppointmentSchemaDef} from "./consultantAppointment.schema-def";

export function createConsultantAppointmentFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ConsultantAppointmentSchemaDef, languageCode, form);
}
