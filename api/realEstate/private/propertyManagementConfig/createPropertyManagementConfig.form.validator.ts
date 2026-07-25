import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PropertyManagementConfigSchemaDef} from "./propertyManagementConfig.schema-def";

export function createPropertyManagementConfigFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PropertyManagementConfigSchemaDef, languageCode, form);
}
