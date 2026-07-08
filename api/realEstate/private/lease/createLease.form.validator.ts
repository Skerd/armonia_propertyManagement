import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {LeaseSchemaDef} from "./lease.schema-def";

export function createLeaseFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(LeaseSchemaDef, languageCode, form);
}
