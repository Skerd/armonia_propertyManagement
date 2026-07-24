import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LiquidityPlanSchemaDef} from "./liquidityPlan.schema-def";

export function createLiquidityPlanFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(LiquidityPlanSchemaDef, languageCode, form);
}
