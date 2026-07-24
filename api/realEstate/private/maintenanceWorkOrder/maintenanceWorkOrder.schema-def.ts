import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const maintenanceWorkOrderStatusValues = ["open", "assigned", "in_progress", "done", "verified", "closed", "cancelled"] as const;
export type MaintenanceWorkOrderStatusValue = typeof maintenanceWorkOrderStatusValues[number];

export const maintenanceWorkOrderTypeValues = ["preventive", "corrective", "renovation"] as const;
export type MaintenanceWorkOrderTypeValue = typeof maintenanceWorkOrderTypeValues[number];

export const MaintenanceWorkOrderSchemaDef = {
    plan:          {type: "objectId", required: false},
    asset:         {type: "objectId", required: false},
    edifice:       {type: "objectId", required: false},
    title:         {type: "string", required: true},
    type:          {type: "enum", required: false, options: maintenanceWorkOrderTypeValues},
    assignee:      {type: "objectId", required: false},
    costEstimate:  {type: "number", required: false},
    actualCost:    {type: "number", required: false},
    currency:      {type: "objectId", required: false},
    linkedSnag:    {type: "objectId", required: false},
    dueDate:       {type: "date", required: false},
    notes:         {type: "string", required: false},
} as const;

export type CreateMaintenanceWorkOrderFormType = InferCreateForm<typeof MaintenanceWorkOrderSchemaDef>;
export type EditMaintenanceWorkOrderFormType = InferEditForm<typeof MaintenanceWorkOrderSchemaDef>;
