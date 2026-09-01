import {buildEditZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {UnitCostSchemaDef} from "./unitCost.schema-def";

export function editUnitCostFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(UnitCostSchemaDef, languageCode, form, permissions, readPermissions);
}
