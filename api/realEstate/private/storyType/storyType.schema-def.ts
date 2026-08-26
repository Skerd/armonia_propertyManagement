import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (name). */
export const STORY_TYPE_NAME_MAX = 128;
/** Long text / textarea fields (description). */
export const STORY_TYPE_DESCRIPTION_MAX = 5000;

export const StoryTypeSchemaDef = {
    name:        { type: "string", required: true,  min: 1, max: STORY_TYPE_NAME_MAX },
    description: { type: "string", required: false, max: STORY_TYPE_DESCRIPTION_MAX },
    sortOrder:   { type: "number", required: false },
} as const;

export type CreateStoryTypeFormType = InferCreateForm<typeof StoryTypeSchemaDef>;
export type EditStoryTypeFormType   = InferEditForm<typeof StoryTypeSchemaDef>;
