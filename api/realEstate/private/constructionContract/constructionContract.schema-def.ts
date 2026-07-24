import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const constructionContractStatusValues = ["draft", "active", "suspended", "completed", "terminated"] as const;
export type ConstructionContractStatusValue = typeof constructionContractStatusValues[number];

export const ConstructionContractSchemaDef = {
    project:            {type: "objectId", required: true},
    edifice:            {type: "objectId", required: false},
    workPackage:        {type: "objectId", required: false},
    constructorRef:        {type: "objectId", required: true},
    title:              {type: "string", required: true},
    description:        {type: "string", required: false},
    currency:           {type: "objectId", required: true},
    contractValue:      {type: "number", required: true},
    retentionPercent:   {type: "number", required: false},
    performanceBond:    {type: "number", required: false},
    paymentTerms:       {type: "string", required: false},
    startDate:          {type: "date", required: false},
    endDate:            {type: "date", required: false},
    notes:              {type: "string", required: false},
    media:              {type: "mediaIdArray", required: false},
} as const;

export type CreateConstructionContractFormType = InferCreateForm<typeof ConstructionContractSchemaDef>;
export type EditConstructionContractFormType = InferEditForm<typeof ConstructionContractSchemaDef>;
