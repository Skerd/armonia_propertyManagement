import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CostClassificationSchemaDef} from "./costClassification.schema-def";

export function createCostClassificationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(CostClassificationSchemaDef, languageCode, form);
}
