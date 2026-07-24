import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WarrantySchemaDef} from "./warranty.schema-def";

export function editWarrantyFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(WarrantySchemaDef, languageCode, form, permissions, readPermissions);
}
