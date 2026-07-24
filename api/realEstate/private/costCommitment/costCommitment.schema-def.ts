import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const costCommitmentStatusValues = ["draft", "issued", "partially_received", "closed", "cancelled"] as const;
export type CostCommitmentStatusValue = typeof costCommitmentStatusValues[number];

export const CostCommitmentSchemaDef = {
    project:          {type: "objectId", required: true},
    edifice:          {type: "objectId", required: false},
    budget:           {type: "objectId", required: false},
    constructorRef:      {type: "objectId", required: false},
    title:            {type: "string", required: true},
    description:      {type: "string", required: false},
    currency:         {type: "objectId", required: true},
    committedAmount:  {type: "number", required: true},
    retentionPercent: {type: "number", required: false},
    issuedAt:         {type: "date", required: false},
    notes:            {type: "string", required: false},
    media:            {type: "mediaIdArray", required: false},
} as const;

export type CreateCostCommitmentFormType = InferCreateForm<typeof CostCommitmentSchemaDef>;
export type EditCostCommitmentFormType = InferEditForm<typeof CostCommitmentSchemaDef>;
