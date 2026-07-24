import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {CostClassificationSchemaDef} from "./costClassification.schema-def";

export function editCostClassificationFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(CostClassificationSchemaDef, languageCode, form, permissions, readPermissions);
}
