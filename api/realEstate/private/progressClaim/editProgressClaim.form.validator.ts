import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProgressClaimSchemaDef} from "./progressClaim.schema-def";

export function editProgressClaimFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ProgressClaimSchemaDef, languageCode, form, permissions, readPermissions);
}
