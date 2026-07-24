import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const variationOrderStatusValues = ["pending_architect", "pending_qs", "pending_client", "approved", "rejected", "cancelled"] as const;
export type VariationOrderStatusValue = typeof variationOrderStatusValues[number];

export const VariationOrderSchemaDef = {
    project:               {type: "objectId", required: true},
    edifice:               {type: "objectId", required: false},
    constructionContract:  {type: "objectId", required: false},
    modificationRequest:   {type: "objectId", required: false},
    title:                 {type: "string", required: true},
    description:           {type: "string", required: true},
    currency:              {type: "objectId", required: false},
    costImpact:            {type: "number", required: false},
    timeImpactDays:        {type: "number", required: false},
    notes:                 {type: "string", required: false},
    media:                 {type: "mediaIdArray", required: false},
} as const;

export type CreateVariationOrderFormType = InferCreateForm<typeof VariationOrderSchemaDef>;
export type EditVariationOrderFormType = InferEditForm<typeof VariationOrderSchemaDef>;
