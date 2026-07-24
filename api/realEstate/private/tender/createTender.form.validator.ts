import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {TenderSchemaDef} from "./tender.schema-def";

export function createTenderFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(TenderSchemaDef, languageCode, form);
}
