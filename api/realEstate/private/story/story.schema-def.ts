import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (title). */
export const STORY_TITLE_MAX = 128;
/** Short teaser shown on the journal card. */
export const STORY_EXCERPT_MAX = 500;
/** Full story body. */
export const STORY_CONTENT_MAX = 10000;

export const StorySchemaDef = {
    project:       { type: "objectId",      required: true  },
    edifice:       { type: "objectId",      required: false },
    unit:          { type: "objectId",      required: false },
    storyType:     { type: "objectId",      required: true  },
    title:         { type: "string",        required: true,  min: 1, max: STORY_TITLE_MAX },
    content:       { type: "string",        required: true,  min: 1, max: STORY_CONTENT_MAX },
    excerpt:       { type: "string",        required: false, max: STORY_EXCERPT_MAX },
    mainImage:     { type: "mediaId",       required: false },
    imageGallery:  { type: "mediaIdArray",  required: false },
    videoGallery:  { type: "mediaIdArray",  required: false },
    published:     { type: "boolean",       required: false },
    publishedAt:   { type: "date",          required: false },
    sortOrder:     { type: "number",        required: false },
} as const;

export type CreateStoryFormType = InferCreateForm<typeof StorySchemaDef>;
export type EditStoryFormType   = InferEditForm<typeof StorySchemaDef>;
