import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {PermitSchemaDef} from "./permit.schema-def";

export function createPermitFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(PermitSchemaDef, languageCode, form);
}
