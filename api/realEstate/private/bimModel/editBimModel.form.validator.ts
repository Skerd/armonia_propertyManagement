import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {BimModelSchemaDef} from "./bimModel.schema-def";
export function editBimModelFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) { return buildEditZodSchema(BimModelSchemaDef, languageCode, form, permissions, readPermissions); }
