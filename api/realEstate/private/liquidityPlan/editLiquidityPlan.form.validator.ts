import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LiquidityPlanSchemaDef} from "./liquidityPlan.schema-def";

export function editLiquidityPlanFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(LiquidityPlanSchemaDef, languageCode, form, permissions, readPermissions);
}
