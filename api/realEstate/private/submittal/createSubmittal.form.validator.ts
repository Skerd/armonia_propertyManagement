import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SubmittalSchemaDef} from "./submittal.schema-def";

export function createSubmittalFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SubmittalSchemaDef, languageCode, form);
}
