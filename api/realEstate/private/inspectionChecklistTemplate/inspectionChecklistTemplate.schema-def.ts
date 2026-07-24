import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const inspectionChecklistTemplateStatusValues = ["active", "archived"] as const;
export type InspectionChecklistTemplateStatusValue = typeof inspectionChecklistTemplateStatusValues[number];

export const InspectionChecklistTemplateSchemaDef = {
    title:       {type: "string", required: true},
    trade:       {type: "string", required: false},
    stage:       {type: "string", required: false},
    description: {type: "string", required: false},
    itemsJson:   {type: "string", required: false},
    notes:       {type: "string", required: false},
} as const;

export type CreateInspectionChecklistTemplateFormType = InferCreateForm<typeof InspectionChecklistTemplateSchemaDef>;
export type EditInspectionChecklistTemplateFormType = InferEditForm<typeof InspectionChecklistTemplateSchemaDef>;
