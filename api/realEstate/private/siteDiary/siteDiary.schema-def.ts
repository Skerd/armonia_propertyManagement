import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const siteDiaryStatusValues = ["draft", "published"] as const;
export type SiteDiaryStatusValue = typeof siteDiaryStatusValues[number];

export const SiteDiarySchemaDef = {
    project:         {type: "objectId", required: true},
    edifice:         {type: "objectId", required: false},
    title:           {type: "string", required: true},
    diaryDate:       {type: "date", required: true},
    weather:         {type: "string", required: false},
    workforceCount:  {type: "number", required: false},
    plantSummary:    {type: "string", required: false},
    workSummary:     {type: "string", required: false},
    visitors:        {type: "string", required: false},
    notes:           {type: "string", required: false},
    media:           {type: "mediaIdArray", required: false},
} as const;

export type CreateSiteDiaryFormType = InferCreateForm<typeof SiteDiarySchemaDef>;
export type EditSiteDiaryFormType = InferEditForm<typeof SiteDiarySchemaDef>;
