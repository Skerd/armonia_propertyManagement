import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LeaseSchemaDef} from "./lease.schema-def";

export function editLeaseFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(LeaseSchemaDef, languageCode, form, permissions, readPermissions);
}
