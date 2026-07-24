import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SubmittalSchemaDef} from "./submittal.schema-def";

export function editSubmittalFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SubmittalSchemaDef, languageCode, form, permissions, readPermissions);
}
