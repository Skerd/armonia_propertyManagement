import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {UnitCostSchemaDef} from "./unitCost.schema-def";

export function generateZodCreateUnitCostFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(UnitCostSchemaDef, languageCode, form);
}
