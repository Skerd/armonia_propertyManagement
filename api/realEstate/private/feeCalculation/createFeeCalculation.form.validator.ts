import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FeeCalculationSchemaDef} from "./feeCalculation.schema-def";

export function createFeeCalculationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(FeeCalculationSchemaDef, languageCode, form);
}
