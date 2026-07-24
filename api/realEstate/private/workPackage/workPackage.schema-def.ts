import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const workPackageStatusValues = ["planned", "active", "completed", "cancelled"] as const;
export type WorkPackageStatusValue = typeof workPackageStatusValues[number];

export const WorkPackageSchemaDef = {
    project:       {type: "objectId", required: true},
    edifice:       {type: "objectId", required: false},
    constructorRef:   {type: "objectId", required: false},
    title:         {type: "string", required: true},
    trade:         {type: "string", required: false},
    description:   {type: "string", required: false},
    plannedStart:  {type: "date", required: false},
    plannedEnd:    {type: "date", required: false},
    notes:         {type: "string", required: false},
} as const;

export type CreateWorkPackageFormType = InferCreateForm<typeof WorkPackageSchemaDef>;
export type EditWorkPackageFormType = InferEditForm<typeof WorkPackageSchemaDef>;
