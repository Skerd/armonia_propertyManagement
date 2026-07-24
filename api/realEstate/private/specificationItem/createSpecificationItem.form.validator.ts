import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {SpecificationItemSchemaDef} from "./specificationItem.schema-def";

export function createSpecificationItemFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(SpecificationItemSchemaDef, languageCode, form);
}
