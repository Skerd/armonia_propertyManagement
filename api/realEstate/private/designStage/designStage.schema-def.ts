import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const designStageStatusValues = ["not_started", "in_progress", "completed", "blocked"] as const;
export type DesignStageStatusValue = typeof designStageStatusValues[number];

export const DesignStageSchemaDef = {
    project:    {type: "objectId", required: true},
    edifice:    {type: "objectId", required: false},
    title:      {type: "string", required: true},
    stageType:  {type: "enum", required: true, options: ["concept","schematic","design_development","construction_documents","tender","construction","as_built"]},
    sortOrder:  {type: "number", required: false},
    description:{type: "string", required: false},
    notes:      {type: "string", required: false},
} as const;

export type CreateDesignStageFormType = InferCreateForm<typeof DesignStageSchemaDef>;
export type EditDesignStageFormType = InferEditForm<typeof DesignStageSchemaDef>;
