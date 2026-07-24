import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SafetyIncidentSchemaDef} from "./safetyIncident.schema-def";

export function editSafetyIncidentFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SafetyIncidentSchemaDef, languageCode, form, permissions, readPermissions);
}
