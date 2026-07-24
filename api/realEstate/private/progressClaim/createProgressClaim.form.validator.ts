import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {ProgressClaimSchemaDef} from "./progressClaim.schema-def";

export function createProgressClaimFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(ProgressClaimSchemaDef, languageCode, form);
}
