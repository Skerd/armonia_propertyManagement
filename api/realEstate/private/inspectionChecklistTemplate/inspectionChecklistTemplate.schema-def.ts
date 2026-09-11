import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const inspectionChecklistTemplateStatusValues = ["active", "archived"] as const;
export type InspectionChecklistTemplateStatusValue = typeof inspectionChecklistTemplateStatusValues[number];

export const inspectionChecklistItemImportanceValues = ["low", "medium", "high"] as const;
export type InspectionChecklistItemImportanceValue = typeof inspectionChecklistItemImportanceValues[number];

export const INSPECTION_CHECKLIST_TITLE_MAX = 200;
export const INSPECTION_CHECKLIST_LONG_TEXT_MAX = 5000;
export const INSPECTION_CHECKLIST_ITEM_NAME_MAX = 200;
export const INSPECTION_CHECKLIST_ITEM_TEXT_MAX = 2000;

export const InspectionChecklistTemplateItemDef = {
    name:         {type: "string", required: true,  min: 1, max: INSPECTION_CHECKLIST_ITEM_NAME_MAX},
    description:  {type: "string", required: false, max: INSPECTION_CHECKLIST_ITEM_TEXT_MAX},
    instructions: {type: "string", required: false, max: INSPECTION_CHECKLIST_ITEM_TEXT_MAX},
    importance:   {type: "enum",   required: false, options: inspectionChecklistItemImportanceValues},
} as const;

export const InspectionChecklistTemplateSchemaDef = {
    title:       {type: "string", required: true, min: 1, max: INSPECTION_CHECKLIST_TITLE_MAX},
    trade:       {type: "string", required: false},
    stage:       {type: "string", required: false},
    description: {type: "string", required: false, max: INSPECTION_CHECKLIST_LONG_TEXT_MAX},
    items:       {type: "embeddedArray", required: true, minItems: 1, items: InspectionChecklistTemplateItemDef},
    notes:       {type: "string", required: false, max: INSPECTION_CHECKLIST_LONG_TEXT_MAX},
} as const;

export type CreateInspectionChecklistTemplateFormType = InferCreateForm<typeof InspectionChecklistTemplateSchemaDef>;
export type EditInspectionChecklistTemplateFormType = InferEditForm<typeof InspectionChecklistTemplateSchemaDef>;
