import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionProgressSchemaDef} from "./constructionProgress.schema-def";

export function createConstructionProgressFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ConstructionProgressSchemaDef, languageCode, form);
}
