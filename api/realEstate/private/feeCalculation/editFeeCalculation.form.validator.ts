import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {FeeCalculationSchemaDef} from "./feeCalculation.schema-def";

export function editFeeCalculationFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(FeeCalculationSchemaDef, languageCode, form, permissions, readPermissions);
}
