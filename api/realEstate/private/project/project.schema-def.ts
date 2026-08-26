import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

/** Short single-line labels (name, titles, social link names). */
export const PROJECT_SHORT_TEXT_MAX = 128;
/** URL fields (social links). */
export const PROJECT_URL_MAX = 1024;
/** Long text / textarea fields (description, magazine copy). */
export const PROJECT_LONG_TEXT_MAX = 10000;

const ProjectSocialLinkItemDef = {
    name: { type: "string", required: true, min: 1, max: PROJECT_SHORT_TEXT_MAX },
    link: { type: "string", required: true, format: "url", max: PROJECT_URL_MAX },
    logo: { type: "mediaId", required: false, publicAccess: true },
} as const;

export const ProjectSchemaDef = {
    name:                             { type: "string",        required: true,  min: 1, max: PROJECT_SHORT_TEXT_MAX },
    description:                      { type: "string",        required: false, max: PROJECT_LONG_TEXT_MAX },
    mainImage:                        { type: "mediaId",       required: true,  publicAccess: true },
    imageGallery:                     { type: "mediaIdArray",  required: false, publicAccess: true },
    videoGallery:                     { type: "mediaIdArray",  required: false, publicAccess: true },
    mediaFiles:                       { type: "mediaIdArray",  required: false },
    marketingBooklet:                 { type: "mediaId",       required: false, publicAccess: true },
    magazineFile:                     { type: "mediaId",       required: false, publicAccess: true },
    magazineTitle:                    { type: "string",        required: false, max: PROJECT_SHORT_TEXT_MAX },
    magazineDescription:              { type: "string",        required: false, max: PROJECT_LONG_TEXT_MAX },
    socialLinks:                      { type: "embeddedArray", required: false, items: ProjectSocialLinkItemDef, maxItems: 20 },
    featuredOnHomepage:               { type: "boolean",       required: false },
    featuredSortOrder:                { type: "number",        required: false, min: 0 },
    saleCommissionRatePercent:        { type: "number",        required: false, min: 0, max: 100 },
    reservationCommissionRatePercent: { type: "number",        required: false, min: 0, max: 100 },
} as const;

export type CreateProjectFormType = InferCreateForm<typeof ProjectSchemaDef>;
export type EditProjectFormType   = InferEditForm<typeof ProjectSchemaDef>;