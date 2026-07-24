import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BimQuantitySchemaDef} from "./bimQuantity.schema-def";
export function createBimQuantityFormSchema(languageCode: string, form: any = null) { return buildCreateZodSchema(BimQuantitySchemaDef, languageCode, form); }
