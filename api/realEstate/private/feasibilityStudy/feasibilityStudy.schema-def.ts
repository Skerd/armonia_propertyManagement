import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

export const feasibilityStudyStatusValues = ["draft", "in_review", "approved", "rejected", "archived"] as const;
export type FeasibilityStudyStatusValue = typeof feasibilityStudyStatusValues[number];

export const FeasibilityStudySchemaDef = {
    project:           {type: "objectId", required: true},
    landParcel:        {type: "objectId", required: false},
    title:             {type: "string", required: true},
    assumptions:       {type: "string", required: false},
    currency:          {type: "objectId", required: false},
    softCostEstimate:  {type: "number", required: false},
    hardCostEstimate:  {type: "number", required: false},
    residualValue:     {type: "number", required: false},
    irrPercent:        {type: "number", required: false},
    decision:          {type: "string", required: false},
    decisionNotes:     {type: "string", required: false},
    decidedBy:         {type: "objectId", required: false},
    decidedAt:         {type: "date", required: false},
    description:       {type: "string", required: false},
    notes:             {type: "string", required: false},
    media:             {type: "mediaIdArray", required: false},
} as const;

export type CreateFeasibilityStudyFormType = InferCreateForm<typeof FeasibilityStudySchemaDef>;
export type EditFeasibilityStudyFormType = InferEditForm<typeof FeasibilityStudySchemaDef>;
