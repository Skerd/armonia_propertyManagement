import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {WarrantySchemaDef} from "./warranty.schema-def";

export function createWarrantyFormSchema(languageCode: string, form: any = null) {
    return buildCreateZodSchema(WarrantySchemaDef, languageCode, form);
}
