import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructorSchemaDef} from "./constructor.schema-def";

export function editConstructorFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ConstructorSchemaDef, languageCode, form, permissions, readPermissions);
}