import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PermitSchemaDef} from "./permit.schema-def";

export function editPermitFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(PermitSchemaDef, languageCode, form, permissions, readPermissions);
}
