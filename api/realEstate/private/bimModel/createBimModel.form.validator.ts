import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BimModelSchemaDef} from "./bimModel.schema-def";
export function createBimModelFormSchema(languageCode: string, form: any = null) { return buildCreateZodSchema(BimModelSchemaDef, languageCode, form); }
