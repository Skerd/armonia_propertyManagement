import {buildEditZodSchema} from "../../../../../core/helpers/schemaDefBuilder";
import {MaintenanceWorkOrderSchemaDef} from "./maintenanceWorkOrder.schema-def";
export function editMaintenanceWorkOrderFormSchema(languageCode: string, form: any = null, permissions: any = {}, readPermissions: any = {}) { return buildEditZodSchema(MaintenanceWorkOrderSchemaDef, languageCode, form, permissions, readPermissions); }
