import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LiquidityLineSchemaDef} from "./liquidityLine.schema-def";

export function editLiquidityLineFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(LiquidityLineSchemaDef, languageCode, form, permissions, readPermissions);
}
