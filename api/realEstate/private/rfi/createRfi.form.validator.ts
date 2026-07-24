import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {RfiSchemaDef} from "./rfi.schema-def";

export function createRfiFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(RfiSchemaDef, languageCode, form);
}
