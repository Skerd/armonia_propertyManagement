import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LiquidityLineSchemaDef} from "./liquidityLine.schema-def";

export function createLiquidityLineFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(LiquidityLineSchemaDef, languageCode, form);
}
