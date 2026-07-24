import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PlanMarkupSchemaDef} from "./planMarkup.schema-def";

export function createPlanMarkupFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PlanMarkupSchemaDef, languageCode, form);
}
