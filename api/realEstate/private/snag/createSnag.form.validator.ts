import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SnagSchemaDef} from "./snag.schema-def";

export function createSnagFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SnagSchemaDef, languageCode, form);
}
