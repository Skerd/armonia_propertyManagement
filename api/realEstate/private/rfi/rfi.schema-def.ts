import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const rfiStatusValues = ["open", "answered", "closed", "void"] as const;
export type RfiStatusValue = typeof rfiStatusValues[number];

export const RfiSchemaDef = {
    project:       {type: "objectId", required: true},
    edifice:       {type: "objectId", required: false},
    title:         {type: "string", required: true},
    question:      {type: "string", required: true},
    answer:        {type: "string", required: false},
    askedBy:       {type: "objectId", required: false},
    answeredBy:    {type: "objectId", required: false},
    dueDate:       {type: "date", required: false},
    relatedDocument: {type: "objectId", required: false},
    notes:         {type: "string", required: false},
    media:         {type: "mediaIdArray", required: false},
} as const;

export type CreateRfiFormType = InferCreateForm<typeof RfiSchemaDef>;
export type EditRfiFormType = InferEditForm<typeof RfiSchemaDef>;
