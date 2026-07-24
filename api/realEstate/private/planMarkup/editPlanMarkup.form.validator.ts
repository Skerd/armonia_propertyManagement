import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PlanMarkupSchemaDef} from "./planMarkup.schema-def";

export function editPlanMarkupFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(PlanMarkupSchemaDef, languageCode, form, permissions, readPermissions);
}
