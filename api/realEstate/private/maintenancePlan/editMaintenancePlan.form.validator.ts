import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MaintenancePlanSchemaDef} from "./maintenancePlan.schema-def";
export function editMaintenancePlanFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) { return buildEditZodSchema(MaintenancePlanSchemaDef, languageCode, form, permissions, readPermissions); }
