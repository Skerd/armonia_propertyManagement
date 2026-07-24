import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BudgetSchemaDef} from "./budget.schema-def";

export function editBudgetFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(BudgetSchemaDef, languageCode, form, permissions, readPermissions);
}
