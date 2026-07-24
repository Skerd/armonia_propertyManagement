import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const progressClaimStatusValues = ["draft", "submitted", "certified", "paid", "rejected"] as const;
export type ProgressClaimStatusValue = typeof progressClaimStatusValues[number];

export const ProgressClaimSchemaDef = {
    project:              {type: "objectId", required: true},
    constructionContract: {type: "objectId", required: true},
    title:                {type: "string", required: true},
    claimPeriodStart:     {type: "date", required: false},
    claimPeriodEnd:       {type: "date", required: false},
    currency:             {type: "objectId", required: true},
    amount:               {type: "number", required: true},
    certifiedAmount:      {type: "number", required: false},
    retentionHeld:        {type: "number", required: false},
    retentionReleased:    {type: "number", required: false},
    description:          {type: "string", required: false},
    notes:                {type: "string", required: false},
    media:                {type: "mediaIdArray", required: false},
} as const;

export type CreateProgressClaimFormType = InferCreateForm<typeof ProgressClaimSchemaDef>;
export type EditProgressClaimFormType = InferEditForm<typeof ProgressClaimSchemaDef>;
