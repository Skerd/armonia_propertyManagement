import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BudgetSchemaDef} from "./budget.schema-def";

export function createBudgetFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BudgetSchemaDef, languageCode, form);
}
