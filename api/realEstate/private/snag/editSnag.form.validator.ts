import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SnagSchemaDef} from "./snag.schema-def";

export function editSnagFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SnagSchemaDef, languageCode, form, permissions, readPermissions);
}
