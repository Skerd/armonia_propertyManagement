import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LeadSchemaDef} from "./lead.schema-def";

export function editLeadFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(LeadSchemaDef, languageCode, form, permissions, readPermissions);
}
