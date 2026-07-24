import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SpecificationSchemaDef} from "./specification.schema-def";

export function createSpecificationFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SpecificationSchemaDef, languageCode, form);
}
