import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {UnitTypeCategorySchemaDef} from "./unitTypeCategory.schema-def";

export function createUnitTypeCategoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(UnitTypeCategorySchemaDef, languageCode, form);
}
