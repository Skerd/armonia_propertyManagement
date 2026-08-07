import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StoryTypeSchemaDef} from "./storyType.schema-def";

export function createStoryTypeFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(StoryTypeSchemaDef, languageCode, form);
}
