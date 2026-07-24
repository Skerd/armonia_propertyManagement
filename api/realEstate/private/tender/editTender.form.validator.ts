import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TenderSchemaDef} from "./tender.schema-def";

export function editTenderFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(TenderSchemaDef, languageCode, form, permissions, readPermissions);
}
