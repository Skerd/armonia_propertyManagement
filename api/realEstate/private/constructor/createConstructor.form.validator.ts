import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ConstructorSchemaDef} from "./constructor.schema-def";

export function createConstructorFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ConstructorSchemaDef, languageCode, form);
}