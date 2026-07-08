import {buildCreateZodSchema} from "../../../../../../core/helpers/schemaDefBuilder";
import {ModificationRequestSchemaDef} from "./modificationRequest.schema-def";

export function createModificationRequestFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ModificationRequestSchemaDef, languageCode, form);
}