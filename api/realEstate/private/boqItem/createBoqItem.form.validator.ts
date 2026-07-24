import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BoqItemSchemaDef} from "./boqItem.schema-def";

export function createBoqItemFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(BoqItemSchemaDef, languageCode, form);
}
