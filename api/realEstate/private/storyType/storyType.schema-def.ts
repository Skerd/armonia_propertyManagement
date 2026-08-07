import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const StoryTypeSchemaDef = {
    name:        { type: "string",  required: true  },
    description: { type: "string",  required: false },
    sortOrder:   { type: "number",  required: false },
} as const;

export type CreateStoryTypeFormType = InferCreateForm<typeof StoryTypeSchemaDef>;
export type EditStoryTypeFormType   = InferEditForm<typeof StoryTypeSchemaDef>;
