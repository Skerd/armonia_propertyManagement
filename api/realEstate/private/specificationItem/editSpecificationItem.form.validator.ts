import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SpecificationItemSchemaDef} from "./specificationItem.schema-def";

export function editSpecificationItemFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(SpecificationItemSchemaDef, languageCode, form, permissions, readPermissions);
}
