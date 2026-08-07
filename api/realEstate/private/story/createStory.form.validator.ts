import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {StorySchemaDef} from "./story.schema-def";

export function createStoryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(StorySchemaDef, languageCode, form);
}
