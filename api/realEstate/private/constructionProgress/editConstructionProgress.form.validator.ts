import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionProgressSchemaDef} from "./constructionProgress.schema-def";

export function editConstructionProgressFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(ConstructionProgressSchemaDef, languageCode, form, permissions, readPermissions);
}
