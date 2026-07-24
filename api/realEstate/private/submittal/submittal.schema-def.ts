import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const submittalStatusValues = ["draft", "submitted", "revise_and_resubmit", "approved", "rejected"] as const;
export type SubmittalStatusValue = typeof submittalStatusValues[number];

export const SubmittalSchemaDef = {
    project:       {type: "objectId", required: true},
    edifice:       {type: "objectId", required: false},
    title:         {type: "string", required: true},
    specReference: {type: "string", required: false},
    description:   {type: "string", required: false},
    submittedBy:   {type: "objectId", required: false},
    reviewedBy:    {type: "objectId", required: false},
    relatedDocument: {type: "objectId", required: false},
    notes:         {type: "string", required: false},
    media:         {type: "mediaIdArray", required: false},
} as const;

export type CreateSubmittalFormType = InferCreateForm<typeof SubmittalSchemaDef>;
export type EditSubmittalFormType = InferEditForm<typeof SubmittalSchemaDef>;
