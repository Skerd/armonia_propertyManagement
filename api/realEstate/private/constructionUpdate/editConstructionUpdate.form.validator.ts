import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionUpdateSchemaDef} from "./constructionUpdate.schema-def";

export function editConstructionUpdateFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(ConstructionUpdateSchemaDef, languageCode, form, permissions, readPermissions);
}
