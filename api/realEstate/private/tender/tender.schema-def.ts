import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Ausschreibung / tendering process for a Specification.
export const tenderStatusValues = ["draft", "published", "closing", "closed", "awarded", "cancelled"] as const;
export type TenderStatusValue = typeof tenderStatusValues[number];

export const TenderSchemaDef = {
    project:            {type: "objectId", required: true},
    edifice:            {type: "objectId", required: false},
    specification:      {type: "objectId", required: true},
    title:              {type: "string", required: true},
    trades:             {type: "stringArray", required: false},
    submissionDeadline: {type: "date", required: false},
    openingDate:        {type: "date", required: false},
    description:        {type: "string", required: false},
    notes:              {type: "string", required: false},
} as const;

export type CreateTenderFormType = InferCreateForm<typeof TenderSchemaDef>;
export type EditTenderFormType = InferEditForm<typeof TenderSchemaDef>;
