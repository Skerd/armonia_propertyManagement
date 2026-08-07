import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const StorySchemaDef = {
    project:       { type: "objectId",      required: true  },
    edifice:       { type: "objectId",      required: false },
    unit:          { type: "objectId",      required: false },
    title:         { type: "string",        required: true  },
    content:       { type: "string",        required: true  },
    excerpt:       { type: "string",        required: false },
    mainImage:     { type: "mediaId",       required: false },
    imageGallery:  { type: "mediaIdArray",  required: false },
    videoGallery:  { type: "mediaIdArray",  required: false },
    published:     { type: "boolean",       required: false },
    publishedAt:   { type: "date",          required: false },
    sortOrder:     { type: "number",        required: false },
} as const;

export type CreateStoryFormType = InferCreateForm<typeof StorySchemaDef>;
export type EditStoryFormType   = InferEditForm<typeof StorySchemaDef>;
