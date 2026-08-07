import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

const ProjectSocialLinkItemDef = {
    name: { type: "string", required: true },
    link: { type: "string", required: true, format: "url" },
    logo: { type: "mediaId", required: false },
} as const;

export const ProjectSchemaDef = {
    name:                             { type: "string",        required: true  },
    description:                      { type: "string",        required: false },
    mainImage:                        { type: "mediaId",       required: true  },
    imageGallery:                     { type: "mediaIdArray",  required: false },
    videoGallery:                     { type: "mediaIdArray",  required: false },
    mediaFiles:                       { type: "mediaIdArray",  required: false },
    marketingBooklet:                 { type: "mediaId",       required: false },
    socialLinks:                      { type: "embeddedArray", required: false, items: ProjectSocialLinkItemDef, maxItems: 20 },
    featuredOnHomepage:               { type: "boolean",       required: false },
    featuredSortOrder:                { type: "number",        required: false, min: 0 },
    saleCommissionRatePercent:        { type: "number",        required: false, min: 0, max: 100 },
    reservationCommissionRatePercent: { type: "number",        required: false, min: 0, max: 100 },
} as const;

export type CreateProjectFormType = InferCreateForm<typeof ProjectSchemaDef>;
export type EditProjectFormType   = InferEditForm<typeof ProjectSchemaDef>;