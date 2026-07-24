import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConsultantAppointmentSchemaDef} from "./consultantAppointment.schema-def";

export function editConsultantAppointmentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ConsultantAppointmentSchemaDef, languageCode, form, permissions, readPermissions);
}
