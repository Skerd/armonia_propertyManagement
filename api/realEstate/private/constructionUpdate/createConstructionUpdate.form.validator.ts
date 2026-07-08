import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructionUpdateSchemaDef} from "./constructionUpdate.schema-def";

export function createConstructionUpdateFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ConstructionUpdateSchemaDef, languageCode, form);
}
