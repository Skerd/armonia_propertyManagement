import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LeadSchemaDef} from "./lead.schema-def";

export function createLeadFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(LeadSchemaDef, languageCode, form);
}
