import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StorySchemaDef} from "./story.schema-def";

export function editStoryFormSchema(
    languageCode: string,
    form: any = null,
    permissions: any = {},
    readPermissions: any = {},
) {
    return buildEditZodSchema(StorySchemaDef, languageCode, form, permissions, readPermissions);
}
