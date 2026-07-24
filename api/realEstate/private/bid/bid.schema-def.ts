import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// Angebot / TenderResponse — a contractor's priced offer against a Tender.
export const bidStatusValues = ["draft", "submitted", "shortlisted", "awarded", "rejected", "withdrawn"] as const;
export type BidStatusValue = typeof bidStatusValues[number];

export const BidSchemaDef = {
    tender:           {type: "objectId", required: true},
    tenderInvitation: {type: "objectId", required: false},
    constructorRef:   {type: "objectId", required: true},
    total:            {type: "number", required: false},
    currency:         {type: "objectId", required: true},
    coveringNotes:    {type: "string", required: false},
    submittedAt:      {type: "date", required: false},
    notes:            {type: "string", required: false},
} as const;

export type CreateBidFormType = InferCreateForm<typeof BidSchemaDef>;
export type EditBidFormType = InferEditForm<typeof BidSchemaDef>;
