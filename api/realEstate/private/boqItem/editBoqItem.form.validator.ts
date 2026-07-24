import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BoqItemSchemaDef} from "./boqItem.schema-def";

export function editBoqItemFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(BoqItemSchemaDef, languageCode, form, permissions, readPermissions);
}
