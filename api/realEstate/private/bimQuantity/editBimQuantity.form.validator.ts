import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BimQuantitySchemaDef} from "./bimQuantity.schema-def";
export function editBimQuantityFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) { return buildEditZodSchema(BimQuantitySchemaDef, languageCode, form, permissions, readPermissions); }
