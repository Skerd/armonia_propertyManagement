import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SiteDiarySchemaDef} from "./siteDiary.schema-def";

export function createSiteDiaryFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SiteDiarySchemaDef, languageCode, form);
}
