import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InspectionChecklistTemplateSchemaDef} from "./inspectionChecklistTemplate.schema-def";

export function editInspectionChecklistTemplateFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(InspectionChecklistTemplateSchemaDef, languageCode, form, permissions, readPermissions);
}
