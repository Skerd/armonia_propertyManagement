import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PropertyManagementConfigSchemaDef} from "./propertyManagementConfig.schema-def";

export function editPropertyManagementConfigFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(PropertyManagementConfigSchemaDef, languageCode, form, permissions, readPermissions);
}
