import {buildCreateZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MaintenanceWorkOrderSchemaDef} from "./maintenanceWorkOrder.schema-def";
export function createMaintenanceWorkOrderFormSchema(languageCode: string, form: any = null) { return buildCreateZodSchema(MaintenanceWorkOrderSchemaDef, languageCode, form); }
