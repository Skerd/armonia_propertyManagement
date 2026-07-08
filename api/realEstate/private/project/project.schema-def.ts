import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const ProjectSchemaDef = {
    name:                             { type: "string",        required: true  },
    description:                      { type: "string",        required: false },
    mainImage:                        { type: "mediaId",       required: true  },
    imageGallery:                     { type: "mediaIdArray",  required: false },
    videoGallery:                     { type: "mediaIdArray",  required: false },
    mediaFiles:                       { type: "mediaIdArray",  required: false },
    marketingBooklet:                 { type: "mediaId",       required: false },
    saleCommissionRatePercent:        { type: "number",        required: false, min: 0, max: 100 },
    reservationCommissionRatePercent: { type: "number",        required: false, min: 0, max: 100 },
} as const;

export type CreateProjectFormType = InferCreateForm<typeof ProjectSchemaDef>;
export type EditProjectFormType   = InferEditForm<typeof ProjectSchemaDef>;