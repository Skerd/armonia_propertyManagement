import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {UnitTypeCategorySchemaDef} from "./unitTypeCategory.schema-def";

export function editUnitTypeCategoryFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(UnitTypeCategorySchemaDef, languageCode, form, permissions, readPermissions);
}
