import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const handoverPackageStatusValues = ["draft", "in_progress", "ready", "completed"] as const;
export type HandoverPackageStatusValue = typeof handoverPackageStatusValues[number];

export const HandoverPackageSchemaDef = {
    project:           {type: "objectId", required: true},
    edifice:           {type: "objectId", required: false},
    unit:              {type: "objectId", required: false},
    title:             {type: "string", required: true},
    omManualsComplete: {type: "boolean", required: false},
    asBuiltComplete:   {type: "boolean", required: false},
    keysTransferred:   {type: "boolean", required: false},
    trainingComplete:  {type: "boolean", required: false},
    description:       {type: "string", required: false},
    notes:             {type: "string", required: false},
    media:             {type: "mediaIdArray", required: false},
} as const;

export type CreateHandoverPackageFormType = InferCreateForm<typeof HandoverPackageSchemaDef>;
export type EditHandoverPackageFormType = InferEditForm<typeof HandoverPackageSchemaDef>;
