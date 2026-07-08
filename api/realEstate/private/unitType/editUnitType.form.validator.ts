import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {UnitTypeSchemaDef} from "./unitType.schema-def";

export function editUnitTypeFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(UnitTypeSchemaDef, languageCode, form, permissions, readPermissions);
}
