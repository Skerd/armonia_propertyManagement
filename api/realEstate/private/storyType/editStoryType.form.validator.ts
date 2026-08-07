import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StoryTypeSchemaDef} from "./storyType.schema-def";

export function editStoryTypeFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) {
    return buildEditZodSchema(StoryTypeSchemaDef, languageCode, form, permissions, readPermissions);
}
