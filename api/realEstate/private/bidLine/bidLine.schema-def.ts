import type {InferCreateForm, InferEditForm} from "../../../../../core/helpers/schemaDefBuilder";

// A contractor's priced line against one SpecificationItem (LV position).
// lineTotal is server-computed (quantity from the LV position × unitPrice).
export const BidLineSchemaDef = {
    bid:                {type: "objectId", required: true},
    specificationItem:  {type: "objectId", required: true},
    title:              {type: "string", required: false},
    quantity:           {type: "number", required: false},
    unitPrice:          {type: "number", required: false},
    currency:           {type: "objectId", required: true},
    alternativeNote:    {type: "string", required: false},
    sortIndex:          {type: "number", required: false},
} as const;

export type CreateBidLineFormType = InferCreateForm<typeof BidLineSchemaDef>;
export type EditBidLineFormType = InferEditForm<typeof BidLineSchemaDef>;
