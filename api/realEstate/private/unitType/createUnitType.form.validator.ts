import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {UnitTypeSchemaDef} from "./unitType.schema-def";

export function createUnitTypeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(UnitTypeSchemaDef, languageCode, form);
}
