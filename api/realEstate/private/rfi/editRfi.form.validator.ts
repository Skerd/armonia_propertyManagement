import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RfiSchemaDef} from "./rfi.schema-def";

export function editRfiFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(RfiSchemaDef, languageCode, form, permissions, readPermissions);
}
