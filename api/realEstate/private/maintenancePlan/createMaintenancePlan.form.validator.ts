import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MaintenancePlanSchemaDef} from "./maintenancePlan.schema-def";
export function createMaintenancePlanFormSchema(languageCode: string, form: any = null) { return buildCreateZodSchema(MaintenancePlanSchemaDef, languageCode, form); }
