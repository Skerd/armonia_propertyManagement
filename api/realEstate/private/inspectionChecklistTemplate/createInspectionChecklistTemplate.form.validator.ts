import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {InspectionChecklistTemplateSchemaDef} from "./inspectionChecklistTemplate.schema-def";

export function createInspectionChecklistTemplateFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(InspectionChecklistTemplateSchemaDef, languageCode, form);
}
